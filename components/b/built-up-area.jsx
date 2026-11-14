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
		"content": `<style>.mm9tqacia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h9v9h9v9H3Zm0 3.5L6.5 3M3 11l8-8M3 15.5l9-9M3 20l9-9M6.5 21l9-9M11 21l9-9m-4.5 9l5.5-5.5");
}
</style><path class="mm9tqacia"/>`,
		"fallback": "uix-sharp:built-up-area",
	});
}

export default Component;
