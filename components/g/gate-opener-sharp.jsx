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
		"content": `<style>.efe2f2brd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5h3v16.75h-3zm15.5 0h3v16.75h-3zM6.5 9.5q5.5-4.75 11 0M6.5 18h11M9 7.85v13.4m3-14.1v14.1m3-13.4v13.4");
}
</style><path class="efe2f2brd"/>`,
		"fallback": "iconoven:gate-opener-sharp",
	});
}

export default Component;
