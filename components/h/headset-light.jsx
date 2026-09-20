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
		"content": `<style>.emezaabct {
  fill: currentColor;
  d: path("M200.47 56.07A101.37 101.37 0 0 0 128.77 26H128A102 102 0 0 0 26 128v56a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-40a22 22 0 0 0-22-22H38.2A90 90 0 0 1 128 38h.68a89.71 89.71 0 0 1 89.13 84H192a22 22 0 0 0-22 22v40a22 22 0 0 0 22 22h26v2a26 26 0 0 1-26 26h-56a6 6 0 0 0 0 12h56a38 38 0 0 0 38-38v-80a101.44 101.44 0 0 0-29.53-71.93M64 134a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10v-50Zm118 50v-40a10 10 0 0 1 10-10h26v60h-26a10 10 0 0 1-10-10");
}
</style><path class="emezaabct"/>`,
		"fallback": "ph:headset-light",
	});
}

export default Component;
