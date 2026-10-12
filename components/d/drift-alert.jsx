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

.oxdpy1bnb {
  d: path("M2.75 20.75c2.75 0 3-7.75 5.75-7.75s3 7.75 5.75 7.75");
}

.umuj9_h8l {
  d: path("M8.75 20.75c2.75 0 3-7.75 5.75-7.75s3 7.75 5.75 7.75M17.97 3.63l2.81 5.24q.47.88-.53.88h-5.5q-1 0-.53-.88l2.81-5.24q.47-.88.94 0M17.5 5.5v1.25m0 1.5v.01");
}
</style><g class="hntgybcog"><path class="oxdpy1bnb"/><path class="umuj9_h8l"/></g>`,
		"fallback": "iconoven:drift-alert",
	});
}

export default Component;
