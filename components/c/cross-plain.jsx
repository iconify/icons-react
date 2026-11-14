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
		"content": `<style>.p2pi9abae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 11H5.5V7H10V2.5h4V7h4.5v4H14m-4 0v10.5h4V11");
}
</style><path class="p2pi9abae"/>`,
		"fallback": "uix-sharp:cross-plain",
	});
}

export default Component;
