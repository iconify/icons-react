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
		"content": `<style>.chpkwbcjl {
  d: path("M8.5 4.5c1.5-1.25 3-1.75 4.5-1.75c3.75 0 6.25 2.75 6.25 6.25c0 2.75-1.25 4.25-2.5 5.5s-1.5 2.5-2 4.25s-1.75 2.5-3.25 2.5c-1.75 0-3-1.25-3.25-3C7.5 15 6 12 6.25 9c.15-2 1-3.5 2.25-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v82f_lb-o {
  d: path("M9.75 9.5c0-2.25 1.5-3.75 3.5-3.75s3.5 1.5 3.5 3.5c0 1.75-1.25 2.75-2 3.75c-.6.85-.75 1.75-1 2.75");
}
</style><g class="hntgybcog"><path class="chpkwbcjl"/><path class="v82f_lb-o"/></g>`,
		"fallback": "iconoven:ear",
	});
}

export default Component;
