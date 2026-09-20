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
		"content": `<style>.l8zif0b6l {
  fill: currentColor;
  d: path("M180 100a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-48 16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m88-20a92 92 0 1 1-92-92a92.1 92.1 0 0 1 92 92m-24 0a68 68 0 1 0-68 68a68.07 68.07 0 0 0 68-68m-32 101.86a108.6 108.6 0 0 1-72 0a12 12 0 0 0-8 22.63a131.8 131.8 0 0 0 32 7V244a12 12 0 0 0 24 0v-16.54a131.8 131.8 0 0 0 32-7a12 12 0 0 0-8-22.63Z");
}
</style><path class="l8zif0b6l"/>`,
		"fallback": "ph:golf-bold",
	});
}

export default Component;
