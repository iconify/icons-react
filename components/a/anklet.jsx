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
		"content": `<style>.h8yw9wbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0Zm9 5.5v1.75m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}
</style><path class="h8yw9wbre"/>`,
		"fallback": "uix-sharp:anklet",
	});
}

export default Component;
