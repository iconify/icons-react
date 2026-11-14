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
		"content": `<style>.i5glcvhqr {
  d: path("M4 21.5v-18h11v8m-4 4l4-4l4 4");
}

.smv2zl5wo {
  d: path("M10 15.5h10v3H10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5glcvhqr"/><path class="smv2zl5wo"/></g>`,
		"fallback": "uix-sharp:bosun-chair",
	});
}

export default Component;
