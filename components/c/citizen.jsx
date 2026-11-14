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

.ktpn8wbwn {
  d: path("M9.25 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7 19.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}

.vg5sydbim {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v9a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V7A3.5 3.5 0 0 1 6 3.5");
}
</style><g class="hntgybcog"><path class="vg5sydbim"/><path class="ktpn8wbwn"/></g>`,
		"fallback": "uix:citizen",
	});
}

export default Component;
