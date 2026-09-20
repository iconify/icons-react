import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h68h6dmmy {
  fill: currentColor;
  d: path("M170 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h68a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h68a6 6 0 0 0 0-12m66-14a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86");
}
</style><path class="h68h6dmmy"/>`,
		"fallback": "ph:chat-teardrop-text-light",
	});
}

export default Component;
