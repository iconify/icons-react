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
		"content": `<style>.mnts40jnt {
  fill: currentColor;
  d: path("M4.043 9.156a8.003 8.003 0 0 1 15.914 0A3 3 0 0 1 22 12v5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-4a1 1 0 0 1 0-2h4a3.01 3.01 0 0 0 2.872-2.129A3 3 0 0 1 19 18h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 2.918-2.999a6 6 0 0 0-11.836 0A3 3 0 0 1 9 12v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3c0-1.287.824-2.433 2.043-2.844");
}
</style><path class="mnts40jnt"/>`,
		"fallback": "coolicons:headset-fill-round",
	});
}

export default Component;
