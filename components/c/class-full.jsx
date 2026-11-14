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
		"content": `<style>.z08y2bcgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5L6 12m.5 0h6a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 13.5A1.5 1.5 0 0 1 6.5 12m0 3l-1 6m7-6l.119 1.194M14.75 18l2 2L21 15.75");
}
</style><path class="z08y2bcgn"/>`,
		"fallback": "uix:class-full",
	});
}

export default Component;
