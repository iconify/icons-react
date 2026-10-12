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
		"content": `<style>.lpob_js1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.75h5.5v5.5h-5.5zm-5 9.25h15.5m-10.5 3.75h5.5v5.5h-5.5z");
}
</style><path class="lpob_js1r"/>`,
		"fallback": "iconoven:fraction-sharp",
	});
}

export default Component;
