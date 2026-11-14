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
		"content": `<style>.e2chk3brd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5V19a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9.5m-11 0a2.25 2.25 0 0 1 1.25-4a2.75 2.75 0 0 1 5-1a2.5 2.5 0 0 1 4.5 1.5a2 2 0 0 1 .25 3.5Zm11 2.5h2a2.5 2.5 0 0 1 2.5 2.5V16a2.5 2.5 0 0 1-2.5 2.5h-2");
}
</style><path class="e2chk3brd"/>`,
		"fallback": "uix-sharp:beer-stein",
	});
}

export default Component;
