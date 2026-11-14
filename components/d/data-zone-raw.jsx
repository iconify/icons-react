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
		"content": `<style>.tqi6gsnkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5v-1a3 3 0 0 1 3-3h1m11 0h1a3 3 0 0 1 3 3v1m0 11v1a3 3 0 0 1-3 3h-1m-11 0h-1a3 3 0 0 1-3-3v-1m6-15H11m2 0h2.5m-7 19H11m2 0h2.5m-13-13V11m0 2v2.5m19-7V11m0 2v2.5M7 8h.01m6.49-1.5h.01M17 11h.01M10 12.5h.01m-3.51 4h.01M14 17h.01m3.49-1.5h.01");
}
</style><path class="tqi6gsnkb"/>`,
		"fallback": "uix:data-zone-raw",
	});
}

export default Component;
