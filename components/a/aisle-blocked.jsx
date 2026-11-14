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
		"content": `<style>.q9g5kfb4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H7v19H2.5Zm14.5 0h4.5v19H17ZM7 9.75h10v4.5H7ZM7 5.5h2.25M7 18.5h2.25M17 5.5h-2.25m2.25 13h-2.25M9 14.25l2.25-4.5m1.5 4.5L15 9.75");
}
</style><path class="q9g5kfb4n"/>`,
		"fallback": "uix-sharp:aisle-blocked",
	});
}

export default Component;
