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
		"content": `<style>.j47t6fbjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14 10l5.5-5.5m-5 0h5v5M14 14l5.5 5.5m0-5v5h-5M10 14l-5.5 5.5m5 0h-5v-5M10 10L4.5 4.5m0 5v-5h5");
}
</style><path class="j47t6fbjg"/>`,
		"fallback": "uix:expand",
	});
}

export default Component;
