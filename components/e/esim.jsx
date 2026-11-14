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

.kymyfps0p {
  d: path("M10.625 10.5h2.75A2.625 2.625 0 0 1 16 13.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 15.875v-2.75a2.625 2.625 0 0 1 2.625-2.625m1.375 0v8");
}

.o-av9cbeg {
  d: path("M5 4.5a2 2 0 0 1 2-2h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="o-av9cbeg"/><path class="kymyfps0p"/></g>`,
		"fallback": "uix:esim",
	});
}

export default Component;
