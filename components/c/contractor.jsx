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
		"content": `<style>.dfdk8qbbq {
  d: path("M17.25 16.75v-1.5h2.5v1.5");
}

.tkza5fb9k {
  d: path("M4.5 10a7.5 7.5 0 0 1 15 0m-5.1 2.5H2.5V10h19v2.4M10 10V2.75M14 10V2.75M15.5 16h6v6h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tkza5fb9k"/><path class="dfdk8qbbq"/></g>`,
		"fallback": "uix-sharp:contractor",
	});
}

export default Component;
