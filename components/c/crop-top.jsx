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
		"content": `<style>.ccxh-djip {
  d: path("M9.75 6.5a2.25 2.75 0 0 0 4.5 0M5.5 14.75h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzh8-dbch {
  d: path("M8.07 6.87L4.93 8.13Q4 8.5 3.8 9.48l-.35 1.79q-.2.98.78 1.2l.29.06q.98.22.98 1.22v2.5q0 1 1 1h11q1 0 1-1v-2.5q0-1 .98-1.22l.29-.06q.98-.22.78-1.2l-.35-1.79q-.2-.98-1.13-1.35l-3.14-1.26Q15 6.5 14 6.5h-4q-1 0-1.93.37");
}
</style><g class="hntgybcog"><path class="hzh8-dbch"/><path class="ccxh-djip"/></g>`,
		"fallback": "iconoven:crop-top",
	});
}

export default Component;
