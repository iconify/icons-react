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
		"content": `<style>.c0qm4qbga {
  d: path("M10.5 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydtwoeb5x {
  d: path("M4.5 14.75a7.5 7.5 0 0 1 15 0Zm-2 2.75h19V20h-19Z");
}
</style><g class="ulnmmdpxh"><path class="ydtwoeb5x"/><path class="c0qm4qbga"/></g>`,
		"fallback": "uix-sharp:cafeteria-staff",
	});
}

export default Component;
