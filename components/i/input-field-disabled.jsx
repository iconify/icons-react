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
		"content": `<style>.pijtaob5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10V8.5A2.5 2.5 0 0 1 5 6h2m10 0h2a2.5 2.5 0 0 1 2.5 2.5V10m0 4v1.5A2.5 2.5 0 0 1 19 18h-2M7 18H5a2.5 2.5 0 0 1-2.5-2.5V14m8-8h3m-3 12h3M7 12h10");
}
</style><path class="pijtaob5h"/>`,
		"fallback": "uix-sharp:input-field-disabled",
	});
}

export default Component;
