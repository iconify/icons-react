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
		"content": `<style>.sx1ymx93o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11h10a4.5 4.5 0 0 1 4.5 4.5A4.5 4.5 0 0 1 17 20H7a4.5 4.5 0 0 1-4.5-4.5A4.5 4.5 0 0 1 7 11m-1.5 0V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V11m2.5 0l6.5-7.5m-4.5 2l3 2.75");
}
</style><path class="sx1ymx93o"/>`,
		"fallback": "uix:fencing-bag",
	});
}

export default Component;
