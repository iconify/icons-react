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
		"content": `<style>.pa9e0__0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21V7a3.5 3.5 0 0 1 7 0v14m0-8h9v8m-18 0h19m-17-10.5h7m-7 5.5h7m6.5-3l-6.5-5");
}
</style><path class="pa9e0__0c"/>`,
		"fallback": "uix-sharp:cement-works",
	});
}

export default Component;
