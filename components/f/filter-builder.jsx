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
		"content": `<style>.lwfa8ab-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h12.5v4.5H9Zm0 6.75h12.5v4.5H9Zm0 6.75h12.5V21H9ZM7 5.25H3.5v13.5H7M3.5 12H7m7-9v4.5m0 2.25v4.5m0 2.25V21");
}
</style><path class="lwfa8ab-o"/>`,
		"fallback": "uix-sharp:filter-builder",
	});
}

export default Component;
