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
		"content": `<style>.o-le_qbat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16m-16 17h16m-8-17l5.5 3l-11 3.5l11 3.75l-11 3.75l5.5 3");
}
</style><path class="o-le_qbat"/>`,
		"fallback": "uix:elastic-energy",
	});
}

export default Component;
