// Setup environment variables
import dotenv from 'dotenv';
dotenv.config();

// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = false; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
     "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    process.env.OPENAI_1,
    process.env.OPENAI_2,
    process.env.OPENAI_3,
    process.env.OPENAI_4,
];