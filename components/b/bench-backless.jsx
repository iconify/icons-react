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
		"content": `<style>.fwhwt3blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 10H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 7m1.5 3v7m13-7v7m-13-3h13");
}
</style><path class="fwhwt3blv"/>`,
		"fallback": "uix:bench-backless",
	});
}

export default Component;
