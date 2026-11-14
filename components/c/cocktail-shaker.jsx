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
		"content": `<style>.mmjgmlm_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.5h3.5V5h-3.5ZM8.5 5h7L17 9H7Zm-2 4h11L16 21H8Zm.75 4h9.5");
}
</style><path class="mmjgmlm_f"/>`,
		"fallback": "uix-sharp:cocktail-shaker",
	});
}

export default Component;
