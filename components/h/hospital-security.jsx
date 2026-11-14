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
		"content": `<style>.fun2n4bvk {
  fill: currentColor;
  d: path("M8 6.75c0-2.5 1.75-4.25 4-4.25s4 1.75 4 4.25Z");
}

.h6j8knffq {
  d: path("M4 20c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1ZM8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.i-1k-3bxu {
  d: path("M6.75 7.25h10.5M12 15.75l.647 1.36l1.493.195l-1.094 1.035l.277 1.48L12 19.1l-1.323.72l.277-1.48l-1.094-1.035l1.493-.195Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6j8knffq"/><path class="fun2n4bvk"/><path class="i-1k-3bxu"/></g>`,
		"fallback": "uix-sharp:hospital-security",
	});
}

export default Component;
