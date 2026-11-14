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
		"content": `<style>.hecqmabyi {
  d: path("M2.5 9.5C4 6.25 6 4.75 8 4.75s4 1.5 5.5 4.75C12 12.75 10 14.25 8 14.25s-4-1.5-5.5-4.75m14.25 0a2.25 6.5 0 1 0 4.5 0a2.25 6.5 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-vf6tzoq {
  d: path("M6 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 10h14m-12-2l-2 2l2 2m10-4l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="hecqmabyi"/><path class="y-vf6tzoq"/></g>`,
		"fallback": "uix:eye-relief",
	});
}

export default Component;
