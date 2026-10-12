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
		"content": `<style>.q9l-34b_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.81 9.5L5.19 6l.06-.5l.24.44l2.02 3.62l.24.44h-3zm11.68.06l2.02-3.62l.24-.44l.06.5l.38 3.5l.06.5h-3zM10 10V6h4v4m-7.75 0H19l.11 1.25l.78 8.75l.11 1.25H4L4.11 20l.78-8.75L5 10z");
}
</style><path class="q9l-34b_w"/>`,
		"fallback": "iconoven:gift-bag-sharp",
	});
}

export default Component;
