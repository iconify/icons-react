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
		"content": `<style>.n5s-33ksq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3 3v2.75a1.25 1.25 0 0 0 2.5 0V3M4.25 7v12M21 12.2V3q-2 1.5-2 5v2h2m-6 11.5c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5m0 0l3.5-3.5");
}
</style><path class="n5s-33ksq"/>`,
		"fallback": "uix:farm-to-table",
	});
}

export default Component;
