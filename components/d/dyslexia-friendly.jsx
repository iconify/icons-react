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
		"content": `<style>.sas30ab3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5v14m0-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm15-11v14m-6-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="sas30ab3w"/>`,
		"fallback": "uix-sharp:dyslexia-friendly",
	});
}

export default Component;
