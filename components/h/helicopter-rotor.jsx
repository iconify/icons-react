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
		"content": `<style>.hyxxtky5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-2v-7.5m1.732 10.5L20.227 19m-9.959-3.75L3.773 19");
}
</style><path class="hyxxtky5k"/>`,
		"fallback": "uix-sharp:helicopter-rotor",
	});
}

export default Component;
