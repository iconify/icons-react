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
		"content": `<style>.n0gkgubmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16m-16 17h16m-8-17l5.5 3l-11 3.5l11 3.75l-11 3.75l5.5 3");
}
</style><path class="n0gkgubmg"/>`,
		"fallback": "uix-sharp:elastic-energy",
	});
}

export default Component;
