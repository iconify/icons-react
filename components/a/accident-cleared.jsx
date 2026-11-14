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
		"content": `<style>.f074d-bjl {
  d: path("m9 14.75l2 2l3.5-4");
}

.gr0js910o {
  d: path("m12 3l9.5 17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gr0js910o"/><path class="f074d-bjl"/></g>`,
		"fallback": "uix-sharp:accident-cleared",
	});
}

export default Component;
