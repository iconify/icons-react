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
		"content": `<style>.h1uk5_d-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.205 15H5C3.5 9 5.5 4 9 4.25c1.5.15 2 .75 3 .75s1.5-.6 3-.75c2.68-.191 4.481 2.696 4.504 6.754M18.25 14.5a2.5 2.5 0 1 0 3.25 3.25m-6.75 3.5l3-3");
}
</style><path class="h1uk5_d-h"/>`,
		"fallback": "uix-sharp:dental-lab",
	});
}

export default Component;
