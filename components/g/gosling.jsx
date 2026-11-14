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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9gjf7buv {
  d: path("M6.25 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.n0mi9wg2i {
  d: path("M7.5 10.5c-3 3.5-1.5 10 5 10c6 0 9-3.5 8.5-8c-2 1.5-5.5 1-8.25-2.25M6.5 6.5L4 7.5l2.5 1m4.25-2h.01");
}
</style><g class="hntgybcog"><path class="l9gjf7buv"/><path class="n0mi9wg2i"/></g>`,
		"fallback": "uix:gosling",
	});
}

export default Component;
