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
		"content": `<style>.ygkjoublm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3.5 21c0-3.75 3.25-6.25 7.5-6.25q1.503 0 2.671.334M14.75 18l2 2L21 15.75");
}
</style><path class="ygkjoublm"/>`,
		"fallback": "uix-sharp:check-in-safe",
	});
}

export default Component;
