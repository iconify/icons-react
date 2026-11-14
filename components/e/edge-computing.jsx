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
		"content": `<style>.h1gzy1b5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15H10a2.5 2.5 0 0 0 0-5a3.25 3.25 0 0 0-6 .5A2.25 2.25 0 0 0 5.75 15ZM14.5 4.5h7v15h-7Zm0 5h7m-7 5h7m-9-2.5h2");
}
</style><path class="h1gzy1b5i"/>`,
		"fallback": "uix-sharp:edge-computing",
	});
}

export default Component;
