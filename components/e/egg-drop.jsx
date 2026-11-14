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
		"content": `<style>.xplzedceh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.5a8 6.5 0 0 1 16 0a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0-4 0a2 2 0 0 0-4 0Zm4.5 7.75a3.5 4 0 1 0 7 0a3.5 4 0 1 0-7 0ZM8 9.5l4 3.75m4-3.75l-4 3.75");
}
</style><path class="xplzedceh"/>`,
		"fallback": "uix-sharp:egg-drop",
	});
}

export default Component;
