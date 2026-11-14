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
		"content": `<style>.gc3yl2b3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h4v17h-4Zm15 0h4v17h-4ZM11.25 10l-2 2l2 2m-2-2h5.5m-2-2l2 2l-2 2");
}
</style><path class="gc3yl2b3t"/>`,
		"fallback": "uix-sharp:design-token-spacing",
	});
}

export default Component;
