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
		"content": `<style>.rknz2cnjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.5H16v6H7.75ZM2.5 15h8.25v6H2.5Zm10.75 0h8.25v6h-8.25ZM10.5 4.25v2.5m2.75-2.5v2.5m-8 10v2.5M8 16.75v2.5m8-2.5v2.5m2.75-2.5v2.5M9.5 8.5l-3 6.5m7.75-6.5L17.5 15");
}
</style><path class="rknz2cnjv"/>`,
		"fallback": "uix-sharp:container-cluster",
	});
}

export default Component;
