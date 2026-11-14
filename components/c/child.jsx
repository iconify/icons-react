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
		"content": `<style>.vqlmpuwot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 20.5C3 16.75 5.25 14 8 14s5 2.75 5 6.5m3.5-7.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M16 20.5c0-2 1-3 2.75-3s2.75 1 2.75 3");
}
</style><path class="vqlmpuwot"/>`,
		"fallback": "uix:child",
	});
}

export default Component;
