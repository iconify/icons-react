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
		"content": `<style>.efl79dbbw {
  d: path("M10.25 20.5v-1a1.75 1.75 0 0 1 3.5 0v1m-11.25 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3i7ytq3i {
  d: path("M6.25 15h11.5a2.75 2.75 0 0 1 2.75 2.75a2.75 2.75 0 0 1-2.75 2.75H6.25a2.75 2.75 0 0 1-2.75-2.75A2.75 2.75 0 0 1 6.25 15m2-5.5h7.5a2.75 2.75 0 0 1 2.75 2.75A2.75 2.75 0 0 1 15.75 15h-7.5a2.75 2.75 0 0 1-2.75-2.75A2.75 2.75 0 0 1 8.25 9.5m2.5-5.5h2.5A2.75 2.75 0 0 1 16 6.75a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 8 6.75A2.75 2.75 0 0 1 10.75 4");
}
</style><g class="hntgybcog"><path class="o3i7ytq3i"/><path class="efl79dbbw"/></g>`,
		"fallback": "uix:bee-hive-garden",
	});
}

export default Component;
