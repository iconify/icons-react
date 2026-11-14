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
		"content": `<style>.b7o1kbcmt {
  d: path("M10 13.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.5 4.75h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0jr_2xyc {
  d: path("M10 9h4a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18v-5.5A3.5 3.5 0 0 1 10 9M8.5 9l2.75-5.5q.75-1.5 1.5 0L15.5 9");
}
</style><g class="hntgybcog"><path class="l0jr_2xyc"/><path class="b7o1kbcmt"/></g>`,
		"fallback": "uix:backstage-pass",
	});
}

export default Component;
