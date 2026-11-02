import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m2ip94brf {
  fill: currentColor;
  d: path("M4.043 9.156a8.003 8.003 0 0 1 15.914 0A3 3 0 0 1 22 12v7a3 3 0 0 1-3 3h-6a1 1 0 0 1 0-2h6a1 1 0 0 0 1-1v-1.171A3 3 0 0 1 19 18h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 2.918-2.999a6 6 0 0 0-11.836 0A3 3 0 0 1 9 12v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3c0-1.287.824-2.433 2.043-2.844");
}
</style><path class="m2ip94brf"/>`,
		"fallback": "coolicons:headset-fill",
	});
}

export default Component;
