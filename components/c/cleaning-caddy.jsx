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
		"content": `<style>.wpt28mb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v8.5H3Zm7 0V6.5A1.5 1.5 0 0 1 11.5 5h1A1.5 1.5 0 0 1 14 6.5V12M4 12V8.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V12");
}
</style><path class="wpt28mb4p"/>`,
		"fallback": "uix-sharp:cleaning-caddy",
	});
}

export default Component;
