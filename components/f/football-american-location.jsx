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
		"content": `<style>.l1n4s5bqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17.5C3 9 9 3 17.5 3c0 8.5-6 14.5-14.5 14.5Zm5.25-5.25l4-4m-4 2l2 2m0-4l2 2M18.5 21.5q-3-3-3-4.5a3 3 0 0 1 6 0q0 1.5-3 4.5Z");
}
</style><path class="l1n4s5bqu"/>`,
		"fallback": "uix-sharp:football-american-location",
	});
}

export default Component;
