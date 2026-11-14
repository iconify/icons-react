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
		"content": `<style>.br_el82oj {
  d: path("M10.5 9v4.5l1.5 5l1.5-5V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwuja2bod {
  d: path("M2.5 15h5v3.5h9V15h5v6.5h-19ZM11 2.5h2A1.5 1.5 0 0 1 14.5 4v3.5A1.5 1.5 0 0 1 13 9h-2a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 11 2.5");
}
</style><g class="hntgybcog"><path class="kwuja2bod"/><path class="br_el82oj"/></g>`,
		"fallback": "uix:cnc-router",
	});
}

export default Component;
