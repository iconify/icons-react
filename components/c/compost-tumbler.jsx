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
		"content": `<style>.e1_jbyb0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.5h6.5a4.25 4.25 0 0 1 4.25 4.25A4.25 4.25 0 0 1 14.25 16h-6.5a4.25 4.25 0 0 1-4.25-4.25A4.25 4.25 0 0 1 7.75 7.5M6 21.5L8 16m9 5.5L15 16m3.5-4.25H21V15M5.5 4.5q5.5-3 11 0M16 2l.5 2.5l-2.5.25");
}
</style><path class="e1_jbyb0w"/>`,
		"fallback": "uix:compost-tumbler",
	});
}

export default Component;
