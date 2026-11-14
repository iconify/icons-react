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

.pf5jncc_t {
  d: path("M9.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0v5.5q0 2 2 2");
}

.y0ru6cc5p {
  d: path("M6.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="y0ru6cc5p"/><path class="pf5jncc_t"/></g>`,
		"fallback": "uix:fire-hose-sign",
	});
}

export default Component;
