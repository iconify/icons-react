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
		"content": `<style>.vd7oy51xb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5h9.5a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H8v-2.5l-3 1A1.5 1.5 0 0 1 3 11V7.5A1.5 1.5 0 0 1 4.5 6zM4.75 6L4 3.5m3.5 3L8.25 4M9.5 14v6m8-6v1.3M14.75 18l2 2L21 15.75");
}
</style><path class="vd7oy51xb"/>`,
		"fallback": "uix:cow-check",
	});
}

export default Component;
