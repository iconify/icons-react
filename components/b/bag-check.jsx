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
		"content": `<style>.gviqvacmc {
  d: path("m9.5 14.25l2 2l3-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us41-1b8w {
  d: path("M8 8.5h8a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H8A5.5 5.5 0 0 1 2.5 14A5.5 5.5 0 0 1 8 8.5m.5 0V6A1.5 1.5 0 0 1 10 4.5h4A1.5 1.5 0 0 1 15.5 6v2.5m-9 0v11m11-11v11");
}
</style><g class="hntgybcog"><path class="us41-1b8w"/><path class="gviqvacmc"/></g>`,
		"fallback": "uix:bag-check",
	});
}

export default Component;
