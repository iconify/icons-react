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
		"content": `<style>.lg_-1kb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.5 13.5l9.75-2.5A10 10 0 0 0 13 3.75ZM4 20l6.5-6.5m4-4l3-3");
}
</style><path class="lg_-1kb4b"/>`,
		"fallback": "uix:cobweb-brush",
	});
}

export default Component;
