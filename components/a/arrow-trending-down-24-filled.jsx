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
		"content": `<style>.uwhq17thh {
  fill: currentColor;
  d: path("M14.003 18.999H21a1 1 0 0 0 .993-.884L22 18v-7a1 1 0 0 0-1.994-.117L20 11l-.001 4.586l-7.292-7.294a1 1 0 0 0-1.32-.083l-.094.083l-2.296 2.292l-5.288-5.29a1 1 0 0 0-1.497 1.32l.083.094l5.994 5.997a1 1 0 0 0 1.32.083l.094-.083l2.296-2.292l6.585 6.586h-4.581a1 1 0 0 0-.993.884l-.007.116a1 1 0 0 0 .883.994z");
}
</style><path class="uwhq17thh"/>`,
		"fallback": "fluent:arrow-trending-down-24-filled",
	});
}

export default Component;
