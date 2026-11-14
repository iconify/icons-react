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
		"content": `<style>.xtza46bzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6.25l3.718-2.272a1.5 1.5 0 0 1 1.564 0L16.5 6.25A1.484 1.484 0 0 1 15.726 9H8.274A1.484 1.484 0 0 1 7.5 6.25M3 20.5h18M6 11v6.5m4-6.5v6.5m4-6.5v6.5m4-6.5v6.5M3 9h18");
}
</style><path class="xtza46bzq"/>`,
		"fallback": "uix:historic-building",
	});
}

export default Component;
