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
		"content": `<style>.onpnfzb8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-.5 4v8m3-8v8m3-8v8m3-8v8m3-8v4m3-4v4m-3.5 7.25a2.5 2.75 0 1 0 5 0a2.5 2.75 0 1 0-5 0M18 16v5.5m-1.5-7.25l.75 1.75m2.25-1.75L18.75 16m-4.5 2.75h1.25m5 0h1.25");
}
</style><path class="onpnfzb8r"/>`,
		"fallback": "uix:head-lice-comb",
	});
}

export default Component;
