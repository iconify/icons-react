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
		"content": `<style>.ittx7xbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5V5q0-2 2-2h14q2 0 2 2v14.5Zm2 0v2m14-2v2M3 8.5h18M3 14h18M10 5.75h4m-4 5.5h4m-4 5.5h4");
}
</style><path class="ittx7xbtp"/>`,
		"fallback": "uix-sharp:chest-of-drawers",
	});
}

export default Component;
