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
		"content": `<style>.x39cyxoil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10a6.5 6.5 0 0 1 13 0m-15 0h4a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Zm13 0h4a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z");
}
</style><path class="x39cyxoil"/>`,
		"fallback": "uix-sharp:ear-defenders-lab",
	});
}

export default Component;
