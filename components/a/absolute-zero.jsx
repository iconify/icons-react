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
		"content": `<style>.o1t6m-b3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 14.5V5a2.5 2.5 0 0 1 5 0v9.5a4 4 0 1 1-5 0m12 .5v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="o1t6m-b3y"/>`,
		"fallback": "uix:absolute-zero",
	});
}

export default Component;
