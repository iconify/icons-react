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
		"content": `<style>.nhaxj7b0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h14.5v17.5H4.75zm3.75-1v2.5m3.5-2.5v2.5m3.5-2.5v2.5M8.25 10h7.5m-7.5 3.5h7.5M8.25 17h4.5");
}
</style><path class="nhaxj7b0v"/>`,
		"fallback": "iconoven:agenda-sheet-sharp",
	});
}

export default Component;
