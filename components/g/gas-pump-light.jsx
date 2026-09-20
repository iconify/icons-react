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
		"content": `<style>.mnf266bfi {
  fill: currentColor;
  d: path("m239.56 71.07l-19.32-19.31a6 6 0 0 0-8.48 8.48l19.31 19.32a9.93 9.93 0 0 1 2.93 7.07V168a10 10 0 0 1-20 0v-40a22 22 0 0 0-22-22h-18V56a22 22 0 0 0-22-22H72a22 22 0 0 0-22 22v154H32a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12h-18v-92h18a10 10 0 0 1 10 10v40a22 22 0 0 0 44 0V86.63a21.88 21.88 0 0 0-6.44-15.56M62 210V56a10 10 0 0 1 10-10h80a10 10 0 0 1 10 10v154Zm80-98a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6");
}
</style><path class="mnf266bfi"/>`,
		"fallback": "ph:gas-pump-light",
	});
}

export default Component;
