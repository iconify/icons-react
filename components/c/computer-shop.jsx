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
		"content": `<style>.h3937xpsf {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v1.2M4.5 11v9.5H12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l83uuab2m {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5m6-5.5H20a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 20 20h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 16.5 15m1.75 5v2m-2 0h4");
}
</style><g class="hntgybcog"><path class="h3937xpsf"/><path class="l83uuab2m"/></g>`,
		"fallback": "uix:computer-shop",
	});
}

export default Component;
