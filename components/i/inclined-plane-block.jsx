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
		"content": `<style>.wq--07bkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.75h17V5l-17 12.75Zm.8-9.1l4.8-3.6l3.6 4.8l-4.8 3.6Z");
}
</style><path class="wq--07bkz"/>`,
		"fallback": "uix-sharp:inclined-plane-block",
	});
}

export default Component;
