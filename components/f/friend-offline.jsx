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
		"content": `<style>.b2c3-qi-t {
  d: path("M6.25 7.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M3 21c0-4 3.25-6.5 7.5-6.5c1.157 0 2.24.185 3.204.536");
}

.c4i0ku1qn {
  fill: currentColor;
  d: path("M15.5 18.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b2c3-qi-t"/><path class="c4i0ku1qn"/></g>`,
		"fallback": "uix:friend-offline",
	});
}

export default Component;
