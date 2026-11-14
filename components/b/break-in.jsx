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

.k-ebwpoja {
  d: path("M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5");
}

.y_lh1jggx {
  d: path("M16 3.5L14.5 7L11 9l1.5 4l4-2l-2-4m-2 6L10 15.25l1.5 2.25l-3.5 3");
}
</style><g class="hntgybcog"><path class="k-ebwpoja"/><path class="y_lh1jggx"/></g>`,
		"fallback": "uix:break-in",
	});
}

export default Component;
