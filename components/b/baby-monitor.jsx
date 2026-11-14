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

.htwzp261d {
  d: path("M6.5 6H9a3.5 3.5 0 0 1 3.5 3.5v8A3.5 3.5 0 0 1 9 21H6.5A3.5 3.5 0 0 1 3 17.5v-8A3.5 3.5 0 0 1 6.5 6m1 0V2.75");
}

.l8dpkcc8o {
  d: path("M5.75 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.25-3a4.5 4.5 0 0 1 0 6M19 8a8 8 0 0 1 0 11");
}
</style><g class="hntgybcog"><path class="htwzp261d"/><path class="l8dpkcc8o"/></g>`,
		"fallback": "uix:baby-monitor",
	});
}

export default Component;
