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
		"content": `<style>.gxhyoqpyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h5v5.5l6 2.5c1.5.5 2 1.5 2 3H6ZM5 17h12.5q2 0 1.5-3M3.5 21.5c4.5-2 10.5-2 17-.5");
}
</style><path class="gxhyoqpyb"/>`,
		"fallback": "uix-sharp:figure-skater-spiral",
	});
}

export default Component;
