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
		"content": `<style>.mwk4jomna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 18.5c5.5 0 4.5-13 10-13m-12 11l2 2l-2 2l-2-2Zm14-13l2 2l-2 2l-2-2Z");
}
</style><path class="mwk4jomna"/>`,
		"fallback": "uix-sharp:animation-curve",
	});
}

export default Component;
