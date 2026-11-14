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
		"content": `<style>.pji2d4bkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19m0-18h12.5A1.5 1.5 0 0 1 19 5v7a1.5 1.5 0 0 1-1.5 1.5H5m7-7.25v4.5M9.25 8.5h5.5");
}
</style><path class="pji2d4bkd"/>`,
		"fallback": "uix:flag-cross",
	});
}

export default Component;
