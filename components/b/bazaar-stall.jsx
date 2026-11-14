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
		"content": `<style>.a2jeqdemc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l1.5-5h15L21 9Zm0 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M5 12v8.5M19 12v8.5M7.5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="a2jeqdemc"/>`,
		"fallback": "uix-sharp:bazaar-stall",
	});
}

export default Component;
