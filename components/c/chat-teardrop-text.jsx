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
		"content": `<style>.lpcd1inld {
  fill: currentColor;
  d: path("M172 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h68a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16m68-12a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0m-16 0a84 84 0 0 0-168 0v84h84a84.09 84.09 0 0 0 84-84");
}
</style><path class="lpcd1inld"/>`,
		"fallback": "ph:chat-teardrop-text",
	});
}

export default Component;
