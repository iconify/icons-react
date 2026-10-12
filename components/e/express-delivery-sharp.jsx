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
		"content": `<style>.h-k48gbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 5.75h13v13h-13zm6.5 0v3.5M2.75 9h3m-1.5 3.25h2m-3.5 3.25h3");
}
</style><path class="h-k48gbre"/>`,
		"fallback": "iconoven:express-delivery-sharp",
	});
}

export default Component;
