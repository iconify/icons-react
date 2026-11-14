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

.dp884nb-d {
  d: path("m6 6l3.5 3.5m0-2.75V9.5H6.75M18 6l-3.5 3.5m0-2.75V9.5h2.75M6 18l3.5-3.5m0 2.75V14.5H6.75M18 18l-3.5-3.5m0 2.75V14.5h2.75M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="dp884nb-d"/></g>`,
		"fallback": "uix:emergency-assembly-point",
	});
}

export default Component;
