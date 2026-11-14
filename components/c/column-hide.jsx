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
		"content": `<style>.hmdju5bdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H8v18H2.5ZM16 3h5.5v18H16Zm-5.25 0v18m2.5-18v18");
}
</style><path class="hmdju5bdc"/>`,
		"fallback": "uix-sharp:column-hide",
	});
}

export default Component;
