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

.j746278tn {
  d: path("M8.5 14a3.5 6.5 0 1 0 7 0a3.5 6.5 0 1 0-7 0");
}

.y4nzvbb2a {
  d: path("M11 7.75C10.5 5 8 3 5.5 2.5M13 7.75C13.5 5 16 3 18.5 2.5m-9.25 8l-3.75-2m3 5.5H4m5.25 3.5L5.5 20m9.25-9.5l3.75-2m-3 5.5H20m-5.25 3.5L18.5 20");
}
</style><g class="hntgybcog"><path class="j746278tn"/><path class="y4nzvbb2a"/></g>`,
		"fallback": "uix:cockroach",
	});
}

export default Component;
