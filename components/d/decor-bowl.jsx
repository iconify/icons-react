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
		"content": `<style>.cp0gl0c0y {
  d: path("M2.5 7h19a9.5 6.5 0 0 1-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lh5e97fgk {
  d: path("m9.5 13.25l-1 4.25h7l-1-4.25");
}
</style><g class="hntgybcog"><path class="cp0gl0c0y"/><path class="lh5e97fgk"/></g>`,
		"fallback": "uix:decor-bowl",
	});
}

export default Component;
