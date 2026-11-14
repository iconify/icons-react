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
		"content": `<style>.o_prxpb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 14.5h2.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 6.75 19h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m1.25 0l3-12m0 14.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 4.75V12a2.5 2.5 0 0 1 5 0v9.5");
}
</style><path class="o_prxpb9g"/>`,
		"fallback": "uix:croquet",
	});
}

export default Component;
