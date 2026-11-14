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
		"content": `<style>.h-q0e_bdd {
  fill: currentColor;
  d: path("M3 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.oav10h6ck {
  d: path("M13 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM2.5 9h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-q0e_bdd"/><path class="oav10h6ck"/></g>`,
		"fallback": "uix-sharp:anaglyph-glasses",
	});
}

export default Component;
