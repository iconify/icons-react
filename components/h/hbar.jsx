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
		"content": `<style>.r16d19l_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.25v17.5M8 14c0-2.75 2-4.75 4.75-4.75s4.75 2 4.75 4.75v6.75m-13-12.5l8.5-3");
}
</style><path class="r16d19l_u"/>`,
		"fallback": "iconoven:hbar",
	});
}

export default Component;
