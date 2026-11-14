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
		"content": `<style>.dp29un0kx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-18 0V21M21 6.5V21M3 16h18M6 11.5h4.5v2.25a2.25 2.25 0 0 1-4.5 0Zm7.5.5H18l-.75 4h-3Z");
}
</style><path class="dp29un0kx"/>`,
		"fallback": "uix-sharp:craft-fair-stall",
	});
}

export default Component;
