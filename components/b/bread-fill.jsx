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
		"content": `<style>.tft6vkrjr {
  fill: currentColor;
  d: path("M200 40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40 40 0 0 0 200 40m-56 64a8 8 0 0 0 0 16v80H48v-80a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48");
}
</style><path class="tft6vkrjr"/>`,
		"fallback": "ph:bread-fill",
	});
}

export default Component;
