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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_-0g5b_r {
  d: path("M12 10c-2.5-3.5-5.5-3.5-5.5-.75C6.5 11.25 9 12 12 12c-2.5.5-4 2.5-3.25 4c.75 1.25 2.25.5 3.25-1.5m0-4.5c2.5-3.5 5.5-3.5 5.5-.75c0 2-2.5 2.75-5.5 2.75c2.5.5 4 2.5 3.25 4c-.75 1.25-2.25.5-3.25-1.5m0-7v9");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="y_-0g5b_r"/></g>`,
		"fallback": "uix:butterfly-specimen",
	});
}

export default Component;
