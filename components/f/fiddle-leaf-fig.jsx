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
		"content": `<style>.f5rpbnbzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 18h9l-1 3.5h-7Zm4.5 0V8m0 7.5c-1.5 0-2.5-.75-3.25-.75c-2 .25-4.25-1-4.25-3c0-1.75 2-2 3.5-1.25c1.25.75 1.5 2.5 4 5Zm0-4c1.5 0 2.5-.75 3.25-.75c2 .25 4.25-1 4.25-3c0-1.75-2-2-3.5-1.25c-1.25.75-1.5 2.5-4 5ZM12 8c-1.5-.5-2.75-1.5-2.75-3s.75-2.5 2-2.5s2 1 1.75 2.5s-.5 2-1 3Z");
}
</style><path class="f5rpbnbzi"/>`,
		"fallback": "uix-sharp:fiddle-leaf-fig",
	});
}

export default Component;
