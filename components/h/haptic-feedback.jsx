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
		"content": `<style>.h7g8h-bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6v18H9ZM6.25 9.5q-1.5 2.5 0 5M3.5 8q-2 4 0 8m14.25-6.5q1.5 2.5 0 5M20.5 8q2 4 0 8");
}
</style><path class="h7g8h-bff"/>`,
		"fallback": "uix-sharp:haptic-feedback",
	});
}

export default Component;
