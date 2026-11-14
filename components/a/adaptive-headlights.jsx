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
		"content": `<style>.f4kj_rbmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5c-4.5 0-7 3-7 6.5s2.5 6.5 7 6.5Zm3.5 2q4.5 0 7.5 2M13.5 12q4.5 0 7.5 2m-7.5 2.5q4.5 0 7.5 2");
}
</style><path class="f4kj_rbmp"/>`,
		"fallback": "uix:adaptive-headlights",
	});
}

export default Component;
