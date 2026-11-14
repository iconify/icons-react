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

.iwsy61scj {
  d: path("M14.5 2.5q.25 4.5 4 5.5");
}

.k1_er-brp {
  d: path("M6 2.5h12l1.5 19H14L12 9l-2 12.5H4.5Z");
}
</style><g class="hntgybcog"><path class="k1_er-brp"/><path class="iwsy61scj"/></g>`,
		"fallback": "uix:hiking-pants",
	});
}

export default Component;
