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
		"content": `<style>.yo2336b_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 20.5V15Q6 14.5 6 12V7a2 2 0 0 1 4 0a2 2 0 0 1 4 0a2 2 0 0 1 4 0v5q0 2.5-2.5 3v5.5M2.5 9H6m12 0h3.5M6 12h6.5");
}
</style><path class="yo2336b_w"/>`,
		"fallback": "uix-sharp:hold-handrail",
	});
}

export default Component;
