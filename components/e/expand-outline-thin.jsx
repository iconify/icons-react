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
		"content": `<style>.cpjt28hee {
  d: path("M4 10V4h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o32gc9b6a {
  d: path("m20 20 -6 -6");
}

.qbycr98pd {
  d: path("m4 4 6 6");
}

.vw4ruuxbu {
  d: path("M14 20h6v-6");
}
</style><g class="hntgybcog"><path class="cpjt28hee"/><path class="qbycr98pd"/><path class="vw4ruuxbu"/><path class="o32gc9b6a"/></g>`,
		"fallback": "iconmind:expand-outline-thin",
	});
}

export default Component;
