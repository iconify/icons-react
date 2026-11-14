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
		"content": `<style>.a10acm-cr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h9v8h-9Zm10 11h9v8h-9Zm-10-8h9m1 11h9M7 10.5v7h2.5m0-1.75l3 1.75l-3 1.75Z");
}
</style><path class="a10acm-cr"/>`,
		"fallback": "uix-sharp:class-diagram",
	});
}

export default Component;
