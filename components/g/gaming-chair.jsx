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
		"content": `<style>.cxgiemk0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13V5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 5v8m-9.25 0h10.5A1.75 1.75 0 0 1 19 14.75a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 14.75A1.75 1.75 0 0 1 6.75 13m3.75-6.5h3m-1.5 10V19m-5.5 2.5L12 19l5.5 2.5");
}
</style><path class="cxgiemk0f"/>`,
		"fallback": "uix:gaming-chair",
	});
}

export default Component;
