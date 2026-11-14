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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.c1upvqbzx {
  d: path("M9 16a3.5 2.75 0 1 0 7 0a3.5 2.75 0 1 0-7 0m-3.25-4.5l1 2.25m1.5-7l.75 3m3-4.5v3.5m3.5-2.5l-.25 3.25M18.5 9l-.75 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="c1upvqbzx"/></g>`,
		"fallback": "uix:baby-handprint",
	});
}

export default Component;
