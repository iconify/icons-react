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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.qcq5qpbet {
  d: path("M10.5 7.25q.75 2.5 3.25 3.25q-2.5.75-3.25 3.25q-.75-2.5-3.25-3.25q2.5-.75 3.25-3.25M15 13q.5 1.75 2.25 2.25q-1.75.5-2.25 2.25q-.5-1.75-2.25-2.25Q14.5 14.75 15 13m1.25-4.75h.01M8.25 16h.01M13 5h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="qcq5qpbet"/></g>`,
		"fallback": "uix:globular-cluster",
	});
}

export default Component;
