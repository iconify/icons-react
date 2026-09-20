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
		"content": `<style>.smggcebjp {
  fill: currentColor;
  d: path("M244 80a44.05 44.05 0 0 0-44-44H48a44 44 0 0 0-20 83.17V200a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20v-80.83A44 44 0 0 0 244 80M52 123.3a12 12 0 0 0-4-23.3a20 20 0 0 1 0-40h92a20 20 0 0 1 0 40a12 12 0 0 0-4 23.3V196H52ZM200 100a12 12 0 0 0-4 23.3V196h-36v-76.83A43.92 43.92 0 0 0 179.17 60H200a20 20 0 0 1 0 40");
}
</style><path class="smggcebjp"/>`,
		"fallback": "ph:bread-bold",
	});
}

export default Component;
