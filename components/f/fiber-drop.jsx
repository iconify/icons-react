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
		"content": `<style>.pj8j-_bdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5v-18m6 15.75v-4.421a1.75 1.75 0 0 1 .642-1.354l3.75-3.068a1.75 1.75 0 0 1 2.216 0l3.75 3.068A1.75 1.75 0 0 1 21 14.829v4.421A1.75 1.75 0 0 1 19.25 21h-7.5A1.75 1.75 0 0 1 10 19.25M2.5 6h3M4 6c4.5 0 7.5 1.5 9.5 5");
}
</style><path class="pj8j-_bdf"/>`,
		"fallback": "uix:fiber-drop",
	});
}

export default Component;
