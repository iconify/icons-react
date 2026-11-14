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
		"content": `<style>.g0krk4t6w {
  d: path("M9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-3 13c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5");
}

.lvzrrfd7e {
  d: path("M2.5 2.5h19v19h-19Zm4 0V12m11-9.5V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lvzrrfd7e"/><path class="g0krk4t6w"/></g>`,
		"fallback": "uix-sharp:cage-fighter",
	});
}

export default Component;
