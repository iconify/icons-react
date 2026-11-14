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
		"content": `<style>.ainm6hbqs {
  d: path("M7.5 17.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2n0i7bcf {
  d: path("M9.5 7V5.5a2.5 2.5 0 0 1 5 0V7m-11 0h17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="w2n0i7bcf"/><path class="ainm6hbqs"/></g>`,
		"fallback": "uix-sharp:category-baby",
	});
}

export default Component;
