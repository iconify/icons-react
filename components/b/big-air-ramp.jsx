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
		"content": `<style>.a4exn2bsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 20.5h-19q10 0 13-8v8M14.487 6.25l4.758-2.219a1.375 1.375 0 0 1 1.827.665a1.375 1.375 0 0 1-.665 1.828l-4.758 2.218a1.375 1.375 0 0 1-1.827-.665a1.375 1.375 0 0 1 .665-1.827");
}
</style><path class="a4exn2bsm"/>`,
		"fallback": "uix:big-air-ramp",
	});
}

export default Component;
