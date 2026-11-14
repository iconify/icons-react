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
		"content": `<style>.xdopc9bpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.75v3.5m.75 2.25l2.25 3m1.75 1.75l3 2.25m2.25.75h2.5M18.5 18v-3.25m-2-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3.5 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.75 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="xdopc9bpj"/>`,
		"fallback": "uix:constellation-scorpius",
	});
}

export default Component;
