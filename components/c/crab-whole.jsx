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
		"content": `<style>.cr4_-klxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14a5.5 3.5 0 1 0 11 0a5.5 3.5 0 1 0-11 0m2-2.75L6 8m2-3.5a2.35 2.35 0 1 1-2.5-1m10 7.75L18 8m-2-3.5a2.35 2.35 0 1 0 2.5-1m-12 10l-3.75-1m5.5 4L4 19.5m13.5-6l3.75-1m-5.5 4l4.25 3");
}
</style><path class="cr4_-klxw"/>`,
		"fallback": "uix:crab-whole",
	});
}

export default Component;
