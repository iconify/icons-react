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
		"content": `<style>.dzgrqvb-g {
  d: path("M4 3.5q4 5 8 0q4 5 8 0M4 14h16M4 17.5h16m-13-7h4.5V14H7Z");
}

.f09ok5rli {
  d: path("M4 21V3.5h16V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f09ok5rli"/><path class="dzgrqvb-g"/></g>`,
		"fallback": "uix-sharp:canopy-bed",
	});
}

export default Component;
