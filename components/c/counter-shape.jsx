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
		"content": `<style>.z3uu-qbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5V21m0-6.5a6 6.5 0 1 0 12 0a6 6.5 0 1 0-12 0");
}
</style><path class="z3uu-qbso"/>`,
		"fallback": "uix:counter-shape",
	});
}

export default Component;
