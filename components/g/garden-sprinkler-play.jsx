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
		"content": `<style>.fs1xn3gvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14.5a3.5 3.5 0 0 1 7 0Zm3.5 0v7m0-13.25V2.5M8.5 9c-1.5-3-4-4-6-2m13 2c1.5-3 4-4 6-2");
}
</style><path class="fs1xn3gvf"/>`,
		"fallback": "uix-sharp:garden-sprinkler-play",
	});
}

export default Component;
