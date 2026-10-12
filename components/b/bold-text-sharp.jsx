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
		"content": `<style>.s7yd9kyba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.75h5.75a4 4 0 0 1 0 8a4 4 0 0 1 0 8H6.75Zm3.25 4h2.25m-2.25 8h2.5m-5.75 6.5h10.5");
}
</style><path class="s7yd9kyba"/>`,
		"fallback": "iconoven:bold-text-sharp",
	});
}

export default Component;
