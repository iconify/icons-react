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
		"content": `<style>.bruwbqbmb {
  d: path("M10.5 5.5a8 8 0 1 0 8 8h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz78o-bsh {
  d: path("M13.25 2.75a8 8 0 0 1 8 8h-8ZM2.5 13.5h8m0 0v8");
}
</style><g class="ulnmmdpxh"><path class="bruwbqbmb"/><path class="yz78o-bsh"/></g>`,
		"fallback": "uix-sharp:bnpl-split-four",
	});
}

export default Component;
