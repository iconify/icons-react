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
		"content": `<style>.r1ezl1mia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5h15v11h-15Zm3.5 0V7a4 4 0 0 1 8 0v3.5m-4 4v3");
}
</style><path class="r1ezl1mia"/>`,
		"fallback": "uix-sharp:http-401",
	});
}

export default Component;
