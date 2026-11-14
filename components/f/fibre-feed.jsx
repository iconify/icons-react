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
		"content": `<style>.dfgforb6n {
  d: path("M9.5 12L12 9.5l2.5 2.5M8 17v4.5m8-4.5v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3qi-mblg {
  d: path("M7.5 14A4 4 0 0 1 8 6a5 5 0 0 1 9 1a3.5 3.5 0 0 1 0 7m-5 7.5v-12");
}
</style><g class="hntgybcog"><path class="r3qi-mblg"/><path class="dfgforb6n"/></g>`,
		"fallback": "uix:fibre-feed",
	});
}

export default Component;
