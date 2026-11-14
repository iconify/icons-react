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
		"content": `<style>.djuruebfr {
  fill: currentColor;
  d: path("M10 10c1.5-1.25 4.25-.75 4.75 1.25s-1 3.75-3 3.5s-3-3.5-1.75-4.75Z");
}

.n6s3s7bor {
  d: path("m12 3l2.5 3.5l4 1v4l2.25 3.75l-5 1.25l-2.25 4L9.75 18l-5-.75L6 12.5l-1.25-4l3.5-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n6s3s7bor"/><path class="djuruebfr"/></g>`,
		"fallback": "uix-sharp:cancer-cell",
	});
}

export default Component;
