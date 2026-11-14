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

.o5lqwu2nq {
  d: path("M4.5 20.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0Z");
}

.r9a-oiqvi {
  d: path("M8 3.5h8l3.5 4L12 18L4.5 7.5Zm-3.5 4h15");
}
</style><g class="hntgybcog"><path class="r9a-oiqvi"/><path class="o5lqwu2nq"/></g>`,
		"fallback": "uix:gem-gravel",
	});
}

export default Component;
