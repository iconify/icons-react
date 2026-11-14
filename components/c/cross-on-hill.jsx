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
		"content": `<style>.gho260yui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c2.5-6.5 6.5-8 9.5-8s7 1.5 9.5 8ZM12 3v9.5M8.75 6h6.5");
}
</style><path class="gho260yui"/>`,
		"fallback": "uix-sharp:cross-on-hill",
	});
}

export default Component;
