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
		"content": `<style>.ky8e0fbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m-13 7h11m-8-2v4m5-4v4");
}
</style><path class="ky8e0fbyo"/>`,
		"fallback": "uix:axle",
	});
}

export default Component;
