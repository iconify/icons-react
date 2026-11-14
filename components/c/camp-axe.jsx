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
		"content": `<style>.f7cvohcke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14h15v5.5a7.5 2 0 0 1-15 0Zm2-5.5L10.75 7l1.75 7h-7ZM10.75 7l9.75-3.5");
}
</style><path class="f7cvohcke"/>`,
		"fallback": "uix-sharp:camp-axe",
	});
}

export default Component;
