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
		"content": `<style>.bn95epr4s {
  d: path("m10.75 8.5l-5 1.5l.5 5L10 17.75M6.25 15L4 19.5");
}

.bwv8829uw {
  d: path("M10 20.5V12c0-4.5 3-7.5 6.5-7.5c3 0 5 2.5 5 6.5v9.5Zm-7.25-15a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bwv8829uw"/><path class="bn95epr4s"/></g>`,
		"fallback": "uix:boulderer",
	});
}

export default Component;
