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
		"content": `<style>.xbhoo1j7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 16.1V20h-12V4h12v3.9M5.25 12h1.5m2 0h.75m1-3l7.25 6m-7.25 0l7.25-6m-.5 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0-8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="xbhoo1j7u"/>`,
		"fallback": "uix-sharp:fabric-cutting",
	});
}

export default Component;
