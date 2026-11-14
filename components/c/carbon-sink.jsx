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
		"content": `<style>.qypvnhy5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5a7.5 6 0 1 0 15 0a7.5 6 0 1 0-15 0m7.5 13v-7m7.5 0v7m-3-3l3 3l3-3");
}
</style><path class="qypvnhy5f"/>`,
		"fallback": "uix:carbon-sink",
	});
}

export default Component;
