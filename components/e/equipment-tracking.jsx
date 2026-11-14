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
		"content": `<style>.o_16pvw9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 9.75l-2.75-3a3 3 0 1 1 5.5 0ZM6 12.5h12a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-2A3.5 3.5 0 0 1 6 12.5M2.5 16h19");
}
</style><path class="o_16pvw9g"/>`,
		"fallback": "uix:equipment-tracking",
	});
}

export default Component;
