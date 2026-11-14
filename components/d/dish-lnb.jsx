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
		"content": `<style>.dapbkbcum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5a9 9 0 0 0 12 12Zm6 6l5.25-5.25M15.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6.5 17.75v3.75m-3 0h6");
}
</style><path class="dapbkbcum"/>`,
		"fallback": "uix-sharp:dish-lnb",
	});
}

export default Component;
