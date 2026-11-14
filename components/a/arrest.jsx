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

.jqf-bjb7n {
  d: path("M6.25 6.5h.5A1.5 1.5 0 0 1 8.25 8a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 4.75 8a1.5 1.5 0 0 1 1.5-1.5m11 0h.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-9 1.5h7.5");
}

.obl84cb6h {
  d: path("M2.75 14.75a4 4 0 1 1 2.5 2.5m16-2.5a4 4 0 1 0-2.5 2.5");
}
</style><g class="hntgybcog"><path class="obl84cb6h"/><path class="jqf-bjb7n"/></g>`,
		"fallback": "uix:arrest",
	});
}

export default Component;
