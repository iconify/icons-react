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
		"content": `<style>.d8_m3qbgs {
  d: path("m5.5 11.5l1 1l1.75-1.75m1.5.75h1.5M5.5 16l1 1l1.75-1.75m1.5.75h1.5m6.57-12.97a3 3 0 1 0 3.4 3.4a2.5 2.5 0 0 1-3.4-3.4Z");
}

.wt5v8fn7q {
  d: path("M2.75 7h11v14.25h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wt5v8fn7q"/><path class="d8_m3qbgs"/></g>`,
		"fallback": "iconoven:bedtime-routine-sharp",
	});
}

export default Component;
