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
		"content": `<style>.qgavbf1rq {
  d: path("M2.5 9h16v10.5h-16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw3w9iklc {
  d: path("M5.5 9V7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-1M6 14.25h4.5m4.5 0h.01");
}
</style><g class="ulnmmdpxh"><path class="qgavbf1rq"/><path class="yw3w9iklc"/></g>`,
		"fallback": "uix-sharp:disk-clone",
	});
}

export default Component;
