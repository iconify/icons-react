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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-n9po25v {
  d: path("M4.25 2.5H6l1 3l-1.5 1c.75 1.5 2.25 3 3.75 3.75l1.25-1.5l3 1v2a1.75 1.75 0 0 1-1.75 1.75c-5.25 0-9.25-4-9.25-9.25A1.75 1.75 0 0 1 4.25 2.5M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="k-n9po25v"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:call-queue",
	});
}

export default Component;
