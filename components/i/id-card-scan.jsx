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
		"content": `<style>.a5aqw1bzh {
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17M7.875 6.75h8.25a2.625 2.625 0 0 1 2.625 2.625v5.25a2.625 2.625 0 0 1-2.625 2.625h-8.25a2.625 2.625 0 0 1-2.625-2.625v-5.25A2.625 2.625 0 0 1 7.875 6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mkg18ablv {
  d: path("M8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.75-1.5H16m-2.25 3H16");
}
</style><g class="hntgybcog"><path class="a5aqw1bzh"/><path class="mkg18ablv"/></g>`,
		"fallback": "uix:id-card-scan",
	});
}

export default Component;
