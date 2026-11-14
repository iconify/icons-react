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
		"content": `<style>.e5qxodb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h7v4h-7Zm3.5-2v2m-4.5 6.75h9V21h-9Zm0 2.25l-3 3l-2-4.5m14 1.5l3 3l2-4.5");
}
</style><path class="e5qxodb1k"/>`,
		"fallback": "uix-sharp:dual-arm-robot",
	});
}

export default Component;
