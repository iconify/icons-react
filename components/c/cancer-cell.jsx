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

.n6s3s7bor {
  d: path("m12 3l2.5 3.5l4 1v4l2.25 3.75l-5 1.25l-2.25 4L9.75 18l-5-.75L6 12.5l-1.25-4l3.5-1.75Z");
}

.txoy6z8qy {
  fill: currentColor;
  d: path("M10 10c1.5-1.25 4.25-.75 4.75 1.25s-1 3.75-3 3.5s-3-3.5-1.75-4.75");
}
</style><g class="hntgybcog"><path class="n6s3s7bor"/><path class="txoy6z8qy"/></g>`,
		"fallback": "uix:cancer-cell",
	});
}

export default Component;
