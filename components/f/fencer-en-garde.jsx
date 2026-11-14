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
		"content": `<style>.kyla6wmba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 4.75a4.6 4.6 0 0 1-6.5 6.5Zm-8.5-2L8 8m3.25 3.25L21 21");
}
</style><path class="kyla6wmba"/>`,
		"fallback": "uix:fencer-en-garde",
	});
}

export default Component;
