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
		"content": `<style>.aivjkkewm {
  d: path("M6.75 8h10.5A1.75 1.75 0 0 1 19 9.75v9a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 18.75v-9A1.75 1.75 0 0 1 6.75 8");
}

.aobh7zpcx {
  d: path("M9.5 20.5V14h5v6.5M5 8L2.5 3.5H7L9.5 8M19 8l2.5-4.5H17L14.5 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aivjkkewm"/><path class="aobh7zpcx"/></g>`,
		"fallback": "uix:cardboard-box-play",
	});
}

export default Component;
