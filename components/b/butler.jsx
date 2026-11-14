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
		"content": `<style>.k5631ccdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 6a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3.5 21.5c0-4 2-6.5 5-7m7 0c3 .5 5 3 5 7m-12-9l7 4v-4l-7 4Z");
}
</style><path class="k5631ccdd"/>`,
		"fallback": "uix:butler",
	});
}

export default Component;
