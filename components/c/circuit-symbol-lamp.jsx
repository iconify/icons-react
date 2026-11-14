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
		"content": `<style>.cwlyqz3yl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm-3.5 0H6m12 0h3.5M7.75 7.75l8.5 8.5m0-8.5l-8.5 8.5");
}
</style><path class="cwlyqz3yl"/>`,
		"fallback": "uix-sharp:circuit-symbol-lamp",
	});
}

export default Component;
