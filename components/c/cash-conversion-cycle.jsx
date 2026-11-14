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
		"content": `<style>.iarv1f17v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 4.5a7.75 7.75 0 0 1 5.5 9.5m2-1l-2 1l-1-2m-1 5.5a7.75 7.75 0 0 1-11 0m2.25 0H6.5v2.25M4.5 14A7.75 7.75 0 0 1 10 4.5m-1.25 2l1.25-2l-2-1m.5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m3.5-1.75v3.5");
}
</style><path class="iarv1f17v"/>`,
		"fallback": "uix:cash-conversion-cycle",
	});
}

export default Component;
