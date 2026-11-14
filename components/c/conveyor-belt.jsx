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

.o-9kyyi3g {
  d: path("M5.5 11h13a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 13.5A2.5 2.5 0 0 1 5.5 11");
}

.zbl-54ndm {
  d: path("M5.5 13.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m3-8h1A1.5 1.5 0 0 1 11 7v2.5A1.5 1.5 0 0 1 9.5 11h-1A1.5 1.5 0 0 1 7 9.5V7a1.5 1.5 0 0 1 1.5-1.5m7 1h1A1.5 1.5 0 0 1 18 8v1.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 14 9.5V8a1.5 1.5 0 0 1 1.5-1.5M6 20v-1.5M18 20v-1.5");
}
</style><g class="hntgybcog"><path class="o-9kyyi3g"/><path class="zbl-54ndm"/></g>`,
		"fallback": "uix:conveyor-belt",
	});
}

export default Component;
