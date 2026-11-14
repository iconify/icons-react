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
		"content": `<style>.ypgm45ywn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18V8H3ZM8 8v3m8-3v3m-9.25 9.5h2.5c1.25-2 1-4.25-.5-6c.75-.75.75-1.5.75-2a1.5 1.5 0 0 0-3 0c0 .5 0 1.25.75 2c-1.5 1.75-1.75 4-.5 6Zm8 0h2.5c1.25-2 1-4.25-.5-6c.75-.75.75-1.5.75-2a1.5 1.5 0 0 0-3 0c0 .5 0 1.25.75 2c-1.5 1.75-1.75 4-.5 6Z");
}
</style><path class="ypgm45ywn"/>`,
		"fallback": "uix-sharp:bowling-pin-setter",
	});
}

export default Component;
