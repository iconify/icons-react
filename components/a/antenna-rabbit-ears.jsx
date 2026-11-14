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
		"content": `<style>.otonbcc5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15h9a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3a3 3 0 0 1 3-3m2.5 0L6 4m8 11l4-11m-2 14h.01");
}
</style><path class="otonbcc5q"/>`,
		"fallback": "uix:antenna-rabbit-ears",
	});
}

export default Component;
