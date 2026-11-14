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
		"content": `<style>.e-tkq4brl {
  fill: currentColor;
  d: path("M8.5 13.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-2.25 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0ur13bxj {
  d: path("M12 2.5c3.5 4.5 7 8 7 12c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-4 3.5-7.5 7-12");
}
</style><g class="hntgybcog"><path class="n0ur13bxj"/><path class="e-tkq4brl"/></g>`,
		"fallback": "uix:cholesterol",
	});
}

export default Component;
