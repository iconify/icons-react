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
		"content": `<style>.lqc7mtrrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h11v8h-11Zm3 10.75h5M15 10.5h6.5v11H15Zm1.25-6q2 0 2 3M16.75 6l1.5 1.5l1.5-1.5m-7.5 13.5q-6.75 0-6.75-3M4 18l1.5-1.5L7 18");
}
</style><path class="lqc7mtrrj"/>`,
		"fallback": "uix-sharp:crossplay",
	});
}

export default Component;
