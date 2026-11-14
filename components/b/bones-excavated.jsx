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
		"content": `<style>.hjfkjjbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8h10a2 2 0 1 1 2.5 2a2 2 0 1 1-2.5 2H7a2 2 0 1 1-2.5-2A2 2 0 1 1 7 8Zm-4.5 8.5h19M5 20h4m3.5 0h6");
}
</style><path class="hjfkjjbrg"/>`,
		"fallback": "uix-sharp:bones-excavated",
	});
}

export default Component;
