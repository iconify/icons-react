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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r7qkslw-m {
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 14c0-4.5 3.25-7 7-7c1.25 0 2.25.2 3 .5");
}

.ysj8j5brz {
  fill: currentColor;
  d: path("M15.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="r7qkslw-m"/><path class="ysj8j5brz"/></g>`,
		"fallback": "uix:friend-online",
	});
}

export default Component;
