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
		"content": `<style>.iigan8bzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 11l2-4.5h15l2 4.5Zm2 0h5v6.5h-5Zm10 0h5v6.5h-5Z");
}
</style><path class="iigan8bzl"/>`,
		"fallback": "uix-sharp:aerobic-step",
	});
}

export default Component;
