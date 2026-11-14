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
		"content": `<style>.bjrchdbqi {
  d: path("M8 3.5L12 8l4-4.5m-4 13.25s-1.75 1.75-1.75 2.75a1.75 1.75 0 0 0 3.5 0c0-1-1.75-2.75-1.75-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3os_bb6s {
  d: path("M3.5 3.5h17l-7 7.5v3h-3v-3Z");
}
</style><g class="hntgybcog"><path class="l3os_bb6s"/><path class="bjrchdbqi"/></g>`,
		"fallback": "uix:filtration",
	});
}

export default Component;
