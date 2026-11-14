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
		"content": `<style>.blml5tbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 18h20M2.5 18v-8q0-2 1.5-2V5h1.5v3Q7 8 7 10v8m5-7za2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 12 18a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 12 11m5 7v-6l1.5-2V8H20v2l1.5 2v6");
}
</style><path class="blml5tbdb"/>`,
		"fallback": "uix:beauty-shelf",
	});
}

export default Component;
