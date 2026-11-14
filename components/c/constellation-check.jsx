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
		"content": `<style>.khcis7b1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 8l3-2.5m3-.5L14 7m.75 3L10 14m-2.5 0L5 10M2.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6-5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-7 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7.75 2.5l2 2L21 15.75");
}
</style><path class="khcis7b1q"/>`,
		"fallback": "uix-sharp:constellation-check",
	});
}

export default Component;
