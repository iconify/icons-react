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
		"content": `<style>.u-vxck67i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5q7.5-2.5 15 0q1.5 5.5 0 11q-7.5 2.5-15 0q-1.5-5.5 0-11m15 0l2-2m-1.25-1.25l2.5 2.5");
}
</style><path class="u-vxck67i"/>`,
		"fallback": "uix:camp-pillow",
	});
}

export default Component;
