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
		"content": `<style>.e2rqg4bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 18.5L10 14m-3 0h3v3m6.5-14l5 8.5h-10Zm-13 17.5h.01");
}
</style><path class="e2rqg4bcl"/>`,
		"fallback": "uix-sharp:direct-to",
	});
}

export default Component;
