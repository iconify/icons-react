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
		"content": `<style>.e8morm8gy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7.5c-3 1-4 3-4 6v5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5c0-3-1-5-4-6Zm0 0L8 3.5h8l-1.5 4m-9 6a2.5 2.5 0 0 0 0 5m13-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="e8morm8gy"/>`,
		"fallback": "uix-sharp:duffel-sailor",
	});
}

export default Component;
