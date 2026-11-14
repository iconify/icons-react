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
		"content": `<style>.fs-o01b8d {
  d: path("M5.5 2.5h13l-1.5 19H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vz0cdebun {
  d: path("M6 8.5q3-1.5 6 0t6 0M6.25 12h3M6.5 16.5h3");
}
</style><g class="ulnmmdpxh"><path class="fs-o01b8d"/><path class="vz0cdebun"/></g>`,
		"fallback": "uix-sharp:hydration-level",
	});
}

export default Component;
