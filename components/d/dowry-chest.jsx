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
		"content": `<style>.c_gx051fv {
  d: path("M3 20V8.5a9 4 0 0 1 18 0V20Zm0-10h7m4 0h7M6.5 10v10m11-10v10");
}

.ri2n7c6au {
  d: path("M10 8h4v5.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_gx051fv"/><path class="ri2n7c6au"/></g>`,
		"fallback": "uix-sharp:dowry-chest",
	});
}

export default Component;
