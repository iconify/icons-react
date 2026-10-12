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
		"content": `<style>.ev1uqxt7k {
  d: path("m4.5 7.75l7.5 4l7.5-4m-7.5 4v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ztihisl_s {
  d: path("m13.32 3.47l5.61 3.06q1.32.72 1.32 2.22v6.5q0 1.5-1.32 2.22l-5.61 3.06q-1.32.72-2.64 0l-5.61-3.06q-1.32-.72-1.32-2.22v-6.5q0-1.5 1.32-2.22l5.61-3.06q1.32-.72 2.64 0");
}
</style><g class="hntgybcog"><path class="ztihisl_s"/><path class="ev1uqxt7k"/></g>`,
		"fallback": "iconoven:cube",
	});
}

export default Component;
