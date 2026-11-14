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
		"content": `<style>.b4p9uj8xf {
  d: path("M10.25 7.5h3.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75M7 16.5V20m5-3.5V20m5-3.5V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-qhnacrb {
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 13V8a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="j-qhnacrb"/><path class="b4p9uj8xf"/></g>`,
		"fallback": "uix:car-ecu",
	});
}

export default Component;
