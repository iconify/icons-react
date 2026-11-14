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
		"content": `<style>.utkdp0bss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5q0 12 12 12Zm3 9v7.5m-3.5 0h7M11 11l4-4m2.75-2.75h.01");
}
</style><path class="utkdp0bss"/>`,
		"fallback": "uix:antenna-high-gain",
	});
}

export default Component;
