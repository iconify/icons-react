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

.o55hkijdf {
  d: path("M4.5 18V7A2.25 2.25 0 0 1 9 7v3q1.5-2 3 0q1.5-2 3 0V7a2.25 2.25 0 0 1 4.5 0v11M4.25 18h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 18");
}

.yb5-eqq7q {
  d: path("M10 18v-3a2 2 0 0 1 4 0v3");
}
</style><g class="hntgybcog"><path class="o55hkijdf"/><path class="yb5-eqq7q"/></g>`,
		"fallback": "uix:bouncy-castle",
	});
}

export default Component;
