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
		"content": `<style>.ad9fq9b-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21c0-3.75 3.75-6 8.5-6s8.5 2.25 8.5 6ZM8 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-2.375 4.375za.884.884 0 0 1 0 1.25a.884.884 0 0 1-1.25 0a.884.884 0 0 1 0-1.25a.884.884 0 0 1 1.25 0m14 0za.884.884 0 0 1 0 1.25a.884.884 0 0 1-1.25 0a.884.884 0 0 1 0-1.25a.884.884 0 0 1 1.25 0m.5-8za.884.884 0 0 1 0 1.25a.884.884 0 0 1-1.25 0a.884.884 0 0 1 0-1.25a.884.884 0 0 1 1.25 0");
}
</style><path class="ad9fq9b-w"/>`,
		"fallback": "uix:dandruff",
	});
}

export default Component;
