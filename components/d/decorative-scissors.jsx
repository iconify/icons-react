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
		"content": `<style>.g4l62qb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 18.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m9 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M9.5 16.25L15.5 3m-1 13.25l-.25-3.5L12 11.5l.25-3.25L10 7l.25-3.5L8.5 3");
}
</style><path class="g4l62qb2p"/>`,
		"fallback": "uix:decorative-scissors",
	});
}

export default Component;
