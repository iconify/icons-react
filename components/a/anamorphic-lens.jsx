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
		"content": `<style>.hd9x23sas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h9v8H3Zm9 4a4 8.5 0 1 0 8 0a4 8.5 0 1 0-8 0Zm2.5 0h7.25");
}
</style><path class="hd9x23sas"/>`,
		"fallback": "uix-sharp:anamorphic-lens",
	});
}

export default Component;
