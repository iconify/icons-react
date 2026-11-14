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
		"content": `<style>.o4ifpvmix {
  d: path("M16.5 4.206a9 9 0 1 1-9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vy58ml51g {
  d: path("m4.5 3.5l3 .75l-.75 3m5.25 9.5c-3-2.25-5-4-5-6.25c0-1.75 1.25-3 2.75-3q1.5 0 2.25 1.5q.75-1.5 2.25-1.5c1.5 0 2.75 1.25 2.75 3c0 2.25-2 4-5 6.25Z");
}
</style><g class="ulnmmdpxh"><path class="o4ifpvmix"/><path class="vy58ml51g"/></g>`,
		"fallback": "uix-sharp:customer-retention",
	});
}

export default Component;
