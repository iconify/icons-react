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
		"content": `<style>.hzkt5iblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l14-17m-11 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11-14c2 2.5 3 6.5 3 11m0 0V17a1.5 1.5 0 0 1-3 0");
}
</style><path class="hzkt5iblr"/>`,
		"fallback": "uix-sharp:fishing-rod",
	});
}

export default Component;
