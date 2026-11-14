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
		"content": `<style>.lswg31boo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5H7l3.5-2.5a1.25 1.25 0 0 1 1.5 2l-1.5 1.5h9a1.75 1.75 0 0 1 0 3.5H10l-3 1.5H2.5M11 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8.5 9a5 5 0 0 1 1-5.5");
}
</style><path class="lswg31boo"/>`,
		"fallback": "uix-sharp:cricket-toss",
	});
}

export default Component;
