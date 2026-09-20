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
		"content": `<style>.z_u3j5b7s {
  fill: currentColor;
  d: path("M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12");
}
</style><path class="z_u3j5b7s"/>`,
		"fallback": "ph:desktop-thin",
	});
}

export default Component;
