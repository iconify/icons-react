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
		"content": `<style>.nu2z3kk2m {
  d: path("M5 12.5h14l2.5 8h-19Z");
}

.ok3t0kbxa {
  d: path("M7 16.5q2.5-1.5 5 0t5 0m-5-14S9.25 5.5 9.25 7a2.75 2.75 0 0 0 5.5 0c0-1.5-2.75-4.5-2.75-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nu2z3kk2m"/><path class="ok3t0kbxa"/></g>`,
		"fallback": "uix-sharp:dog-water-bowl",
	});
}

export default Component;
