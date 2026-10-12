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
		"content": `<style>.q_cb7ub1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12L13 10.5l7.25 1.75h1v2h-1L13 15.75L4.25 14.5H3V12zm10.25-1.15l.75-4.1M7 3.75h9.25v3H7zm-4 14.5h18v3H3zm7 0v3");
}
</style><path class="q_cb7ub1c"/>`,
		"fallback": "iconoven:bricklaying-trowel-sharp",
	});
}

export default Component;
