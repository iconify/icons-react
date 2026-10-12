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

.t5oj_94rs {
  d: path("M8.75 18.25c.25-4.02 1.95-5.75 6.5-5.75c-.25 4.02-1.95 5.75-6.5 5.75");
}

.wv6_i6q5n {
  d: path("M3.25 19.75v-7.5q0-1.5 1.14-2.48l6.47-5.54q1.14-.98 2.28 0l6.47 5.54q1.14.98 1.14 2.48v7.5q0 1.5-1.5 1.5H4.75q-1.5 0-1.5-1.5");
}
</style><g class="hntgybcog"><path class="wv6_i6q5n"/><path class="t5oj_94rs"/></g>`,
		"fallback": "iconoven:eco-house",
	});
}

export default Component;
