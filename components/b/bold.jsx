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
		"content": `<style>.ram05q1tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.5h6a3.75 3.75 0 0 1 0 7.5h1a3.75 3.75 0 0 1 0 7.5H7ZM7 12h6");
}
</style><path class="ram05q1tv"/>`,
		"fallback": "uix-sharp:bold",
	});
}

export default Component;
