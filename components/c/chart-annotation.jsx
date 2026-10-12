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

.ux32n0bfz {
  d: path("M3.75 3.75v14.5a2 2 0 0 0 2 2h14.5");
}

.vc8lgnb0v {
  d: path("m7 17.25l3.75-4L14 15.5l6.25-5.25m-9.75-7.5h8.75q1 0 1 1V7q0 1-1 1h-2.5q-1 0-1.65.76l-.2.23q-.65.76-1.3 0l-.2-.23Q12.75 8 11.75 8H10.5q-1 0-1-1V3.75q0-1 1-1m1.75 2.75h5.25");
}
</style><g class="hntgybcog"><path class="ux32n0bfz"/><path class="vc8lgnb0v"/></g>`,
		"fallback": "iconoven:chart-annotation",
	});
}

export default Component;
