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
		"content": `<style>.z3qzoz4sr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L12 3l9.5 5Zm0 11.5h9.8m8.9 0h.3M6 11v5m4-5v5m4-5v3.8m4-3.8v3.8M14.75 18l2 2L21 15.75");
}
</style><path class="z3qzoz4sr"/>`,
		"fallback": "uix-sharp:courthouse-check",
	});
}

export default Component;
