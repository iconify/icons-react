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
		"content": `<style>.l79l8cbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 20.5L12 4l6.5 16.5M7.75 15h8.5M2.5 4h19");
}
</style><path class="l79l8cbqs"/>`,
		"fallback": "uix-sharp:cap-height",
	});
}

export default Component;
