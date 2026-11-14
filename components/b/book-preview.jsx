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
		"content": `<style>.ajhaubbnj {
  d: path("M14.5 18.5q3.75-5.5 7.5 0q-3.75 5.5-7.5 0m3.75 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tt5t5776l {
  d: path("M19 13.01V2.75c-3.25-.5-6.25 0-8.25 1.25c-2-1.25-5-1.75-8.25-1.25V14.5c3.25-.5 6.25 0 8.25 1.5c.971-.728 2.177-1.22 3.533-1.477M10.75 4v12");
}
</style><g class="hntgybcog"><path class="tt5t5776l"/><path class="ajhaubbnj"/></g>`,
		"fallback": "uix:book-preview",
	});
}

export default Component;
