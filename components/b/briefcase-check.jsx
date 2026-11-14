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
		"content": `<style>.dmog1hbxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 18.5H2.5V6h18v6.3M8 6V4.5A1.5 1.5 0 0 1 9.5 3h4A1.5 1.5 0 0 1 15 4.5V6m-.25 12l2 2L21 15.75");
}
</style><path class="dmog1hbxg"/>`,
		"fallback": "uix-sharp:briefcase-check",
	});
}

export default Component;
