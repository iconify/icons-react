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
		"content": `<style>.et4yfzbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 4.5h7m-3.5 0v17m-3.5-9h7l-1.5 4h-4Zm1 9h5M2.5 16a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0Zm1-4.5c1-5 5-6.5 8.5-4.75");
}
</style><path class="et4yfzbyv"/>`,
		"fallback": "uix-sharp:disc-golf",
	});
}

export default Component;
