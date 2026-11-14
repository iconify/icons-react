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
		"content": `<style>.qaixd_l4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6h12v12H6Zm-4 6h4m12 0h4M9 10.5h6m-6 3h1.5m2.75 0H15");
}
</style><path class="qaixd_l4q"/>`,
		"fallback": "uix-sharp:dc-dc-converter",
	});
}

export default Component;
