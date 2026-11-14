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
		"content": `<style>.fdopgyk0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h13v17L16 19l-2.5 1.5L11 19l-2.5 1.5l-3-1.5ZM9 8h6m-6 3.5h6M9 15h3");
}
</style><path class="fdopgyk0n"/>`,
		"fallback": "uix-sharp:bill-check",
	});
}

export default Component;
