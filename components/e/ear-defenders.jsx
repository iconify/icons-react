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
		"content": `<style>.l3ivc5boa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 10.5v-1a6.25 6.25 0 0 1 12.5 0v1m-12.5 0zA3.25 3.25 0 0 1 9 13.75v3.5a3.25 3.25 0 0 1-3.25 3.25a3.25 3.25 0 0 1-3.25-3.25v-3.5a3.25 3.25 0 0 1 3.25-3.25m12.5 0za3.25 3.25 0 0 1 3.25 3.25v3.5a3.25 3.25 0 0 1-3.25 3.25A3.25 3.25 0 0 1 15 17.25v-3.5a3.25 3.25 0 0 1 3.25-3.25");
}
</style><path class="l3ivc5boa"/>`,
		"fallback": "uix:ear-defenders",
	});
}

export default Component;
