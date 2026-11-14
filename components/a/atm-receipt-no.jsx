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
		"content": `<style>.bk_we5b5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 2.5H19v12.6m-2.663 5.175L14.5 21.5L12 20l-2.5 1.5L7.25 20L5 21.5V8.948M10.4 6.5h5.1M13.9 10h1.6m-7 3.5h1.1m-6.1-10l17 17");
}
</style><path class="bk_we5b5m"/>`,
		"fallback": "uix:atm-receipt-no",
	});
}

export default Component;
