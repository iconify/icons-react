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
		"content": `<style>.y6zx1zbbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25h18.5m-17.75 0v7m17-7v7m-14.75-7a4.25 4.25 0 0 1 8.5 0M10 10V8m6.25-1.5h3.5v4.25h-3.5V9ZM18 10.75v3.5");
}
</style><path class="y6zx1zbbi"/>`,
		"fallback": "iconoven:feast-table-sharp",
	});
}

export default Component;
