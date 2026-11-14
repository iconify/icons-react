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
		"content": `<style>.efjnaizyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5h13c2 0 3.5-.75 3.5-2s-1.5-2-3.5-2H9.5L6.5 6h-2l-1 7c0 1.75.5 2.5 1.5 2.5m6.25 0h1a.725.725 0 0 1 .513 1.237l-2.324 2.324a1.5 1.5 0 0 1-1.06.439H8.75a.625.625 0 0 1-.5-1l1.8-2.4a1.5 1.5 0 0 1 1.2-.6m3.625 0h1.75a1.125 1.125 0 0 1 1.125 1.125a1.125 1.125 0 0 1-1.125 1.125h-1.75a1.125 1.125 0 0 1-1.125-1.125a1.125 1.125 0 0 1 1.125-1.125");
}
</style><path class="efjnaizyf"/>`,
		"fallback": "uix:airliner-side",
	});
}

export default Component;
