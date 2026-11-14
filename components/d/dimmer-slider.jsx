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
		"content": `<style>.x3o5xqp9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 9h9v4h-9ZM12 10.5v3.75m0 4v3.25M4.5 5.25h2.25m10.5 0h2.25");
}
</style><path class="x3o5xqp9u"/>`,
		"fallback": "uix-sharp:dimmer-slider",
	});
}

export default Component;
