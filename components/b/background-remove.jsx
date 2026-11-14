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
		"content": `<style>.uqsenradx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6V2.5H6m12 0h3.5V6m0 12v3.5H18m-12 0H2.5V18M10 2.5h4m7.5 7.5v4M10 21.5h4M2.5 10v4M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2.5 9.5c0-2.25 2.5-3.75 5.5-3.75s5.5 1.5 5.5 3.75Z");
}
</style><path class="uqsenradx"/>`,
		"fallback": "uix:background-remove",
	});
}

export default Component;
