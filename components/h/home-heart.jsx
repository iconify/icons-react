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
		"content": `<style>.ivnnm4p-y {
  d: path("M12 17.5s-3-1.75-3-3.75c0-1 .75-1.75 1.75-1.75c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75c1 0 1.75.75 1.75 1.75c0 2-3 3.75-3 3.75Z");
}

.q5q4_bbdl {
  d: path("m4 10.5l8-7l8 7V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q5q4_bbdl"/><path class="ivnnm4p-y"/></g>`,
		"fallback": "uix-sharp:home-heart",
	});
}

export default Component;
