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
		"content": `<style>.laedbheqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h13.75a2.625 2.625 0 0 1 2.625 2.625v6.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-6.75A2.625 2.625 0 0 1 5.125 7.5M4 7.5v-3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M7 10.25V12m0 2.75v1.75m3-3h7");
}
</style><path class="laedbheqq"/>`,
		"fallback": "uix:cheque-book",
	});
}

export default Component;
