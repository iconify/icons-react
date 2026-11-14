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
		"content": `<style>.fy1amglqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c3-3 3.75-9 0-9s-3 6 0 9s3.75 9 0 9s-3-6 0-9Zm2.5-5.5L19 3M9.5 17.5L5 21");
}
</style><path class="fy1amglqq"/>`,
		"fallback": "uix-sharp:figure-eight-knot",
	});
}

export default Component;
