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
		"content": `<style>.jji0kebwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm3 5.5H10m-2.5 4H10m-2.5 4H10m2.75-8h3.75m-3.75 4h3.75m-3.75 4H15");
}
</style><path class="jji0kebwc"/>`,
		"fallback": "uix-sharp:deductions-list",
	});
}

export default Component;
