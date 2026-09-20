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
		"content": `<style>.x6ljaobld {
  fill: currentColor;
  d: path("M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM164 64a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12");
}
</style><path class="x6ljaobld"/>`,
		"fallback": "ph:device-mobile-speaker-bold",
	});
}

export default Component;
