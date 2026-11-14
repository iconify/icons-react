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
		"content": `<style>.tzt52acap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5v15m3-15v15m3-15v15m3-15V12m3.25 4.5h4.5A1.75 1.75 0 0 1 22 18.25v.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 14 18.75v-.5a1.75 1.75 0 0 1 1.75-1.75m0 0v-2.75h4.5v2.75m-4.5 2h4.5");
}
</style><path class="tzt52acap"/>`,
		"fallback": "uix:barcode-print",
	});
}

export default Component;
