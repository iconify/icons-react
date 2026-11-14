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
		"content": `<style>.e8vdn8hxh {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17ZM12 9v8");
}

.g2vxby7tq {
  d: path("m9 14l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e8vdn8hxh"/><path class="g2vxby7tq"/></g>`,
		"fallback": "uix-sharp:affordability",
	});
}

export default Component;
