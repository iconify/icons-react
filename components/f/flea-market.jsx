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
		"content": `<style>.h0t85cb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L5 3h14l2 4.5q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0m-.5 13h19M4.75 13.75l.36-.841A1.5 1.5 0 0 1 6.489 12h2.022a1.5 1.5 0 0 1 1.379.909l.36.841a1.255 1.255 0 0 1-1.154 1.75H5.904a1.255 1.255 0 0 1-1.154-1.75M7.5 15.5v5M16 12h3v1c2 1.5 2 6 .5 7.5h-4C14 19 14 14.5 16 13Z");
}
</style><path class="h0t85cb7m"/>`,
		"fallback": "uix:flea-market",
	});
}

export default Component;
