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
		"content": `<style>.ssuq9hban {
  fill: currentColor;
  d: path("M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-47.78 16c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67 82.94C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8");
}
</style><path class="ssuq9hban"/>`,
		"fallback": "ph:disco-ball-fill",
	});
}

export default Component;
