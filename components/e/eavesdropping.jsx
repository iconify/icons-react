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

.rzdh68bgs {
  d: path("M10.25 9c0-1.75 1.25-3 3-3C14.9 6 16 7.25 16 8.75S14.75 10.9 13.75 12m-10-4c-1 1.75-1 4.25 0 6");
}

.y95tv_adk {
  d: path("M7.25 9c0-3.5 2.5-6 6-6c3.25 0 5.5 2.5 5.5 5.75c0 2.75-1.5 4-2.75 5.25s-1.25 2.5-1.75 4.5c-.5 1.75-2 2.5-3.5 2.5c-2 0-3.5-1.5-3.5-3.5");
}
</style><g class="hntgybcog"><path class="y95tv_adk"/><path class="rzdh68bgs"/></g>`,
		"fallback": "uix:eavesdropping",
	});
}

export default Component;
