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

.pfifogrfy {
  d: path("M9 16.5c-1.75-1.25-3-3.25-3-5.5a6 6 0 0 1 12 0c0 2.25-1.25 4.25-3 5.5V18H9Zm1 4.5h4");
}

.qb1b68cdy {
  d: path("M10.5 9.75c0-1 .7-1.75 1.5-1.75s1.5.75 1.5 1.5c0 1.25-1.5 1.5-1.5 2.75m0 2.5h.01");
}
</style><g class="hntgybcog"><path class="pfifogrfy"/><path class="qb1b68cdy"/></g>`,
		"fallback": "uix:hypothesis",
	});
}

export default Component;
