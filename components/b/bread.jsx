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
		"content": `<style>.a3zlmobgy {
  fill: currentColor;
  d: path("M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48");
}
</style><path class="a3zlmobgy"/>`,
		"fallback": "ph:bread",
	});
}

export default Component;
