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
		"content": `<style>.ftma5wb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h10l4 5.5L12 21L3 9.5ZM3 9.5h18m-11.5 0L12 21m2.5-11.5L12 21");
}
</style><path class="ftma5wb9a"/>`,
		"fallback": "uix-sharp:hidden-gem",
	});
}

export default Component;
