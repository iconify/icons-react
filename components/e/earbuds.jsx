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
		"content": `<style>.phf3ulbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm10 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM5.5 12v7.5m13-7.5v7.5");
}
</style><path class="phf3ulbtf"/>`,
		"fallback": "uix-sharp:earbuds",
	});
}

export default Component;
