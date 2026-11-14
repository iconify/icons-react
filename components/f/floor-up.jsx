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
		"content": `<style>.vbu7m2blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9L8 3.5L13.5 9v12h-11Zm0 5.5h11m5-11v17M15.75 6.25L18.5 3.5l2.75 2.75");
}
</style><path class="vbu7m2blo"/>`,
		"fallback": "uix-sharp:floor-up",
	});
}

export default Component;
