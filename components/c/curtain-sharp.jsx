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
		"content": `<style>.e5lcuoywi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5m-17 2.5h6.25c0 6.25-1.5 11-4.75 15.5h-1.5Zm15.5 0H13.5c0 6.25 1.5 11 4.75 15.5h1.5Z");
}
</style><path class="e5lcuoywi"/>`,
		"fallback": "iconoven:curtain-sharp",
	});
}

export default Component;
