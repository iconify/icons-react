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

.i9507fd3f {
  fill: currentColor;
  d: path("M13 13.5h5.5A2.5 2.5 0 0 1 21 16a2.5 2.5 0 0 1-2.5 2.5H13a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5");
}

.y5czubb4d {
  d: path("M3.5 3v18M9 5h5.5A2.5 2.5 0 0 1 17 7.5a2.5 2.5 0 0 1-2.5 2.5H9a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 9 5");
}
</style><g class="hntgybcog"><path class="y5czubb4d"/><path class="i9507fd3f"/></g>`,
		"fallback": "uix:gantt-baseline",
	});
}

export default Component;
