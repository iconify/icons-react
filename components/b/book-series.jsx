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
		"content": `<style>.yim1uir4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3H9a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 9 20.5H5.5A1.5 1.5 0 0 1 4 19V4.5A1.5 1.5 0 0 1 5.5 3m9.25 3.5h3.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-3.5a1.5 1.5 0 0 1-1.5-1.5V8a1.5 1.5 0 0 1 1.5-1.5M2.5 20.5h19M4 7h6.5m2.75 3.5h6.5");
}
</style><path class="yim1uir4q"/>`,
		"fallback": "uix:book-series",
	});
}

export default Component;
