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
		"content": `<style>.w18ej_bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6a2.5 2.5 0 0 1 5 0ZM7.75 6h8.5v2.5h-8.5zm-2.5 5.5h13.5v9.75H5.25z");
}
</style><path class="w18ej_bbr"/>`,
		"fallback": "iconoven:allowance-jar-sharp",
	});
}

export default Component;
