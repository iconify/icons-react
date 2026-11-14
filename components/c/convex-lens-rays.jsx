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
		"content": `<style>.ev2a68btr {
  d: path("M3.5 7.5h5l12 4.5m-17 4.5h5l12-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qpbs895_q {
  d: path("M8.5 3q4 9 0 18q-4-9 0-18");
}
</style><g class="hntgybcog"><path class="qpbs895_q"/><path class="ev2a68btr"/></g>`,
		"fallback": "uix:convex-lens-rays",
	});
}

export default Component;
