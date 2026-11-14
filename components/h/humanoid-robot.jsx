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
		"content": `<style>.h_m6g7xwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8v6H8Zm-1 8.75h10v6.5H7ZM7 13l-2.5 2.5V18M17 13l2.5 2.5V18m-9.5-.25v3.75m4-3.75v3.75m-3.25-16h2.5");
}
</style><path class="h_m6g7xwb"/>`,
		"fallback": "uix-sharp:humanoid-robot",
	});
}

export default Component;
