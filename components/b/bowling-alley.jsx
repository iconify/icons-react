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
		"content": `<style>.sw7rsmbdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l2.5-9.25M21 21.5l-2.5-9.25M5 9.5h2C8 7.75 7.75 6 6.75 5c.75-.75.5-2.5-.75-2.5S4.5 4.25 5.25 5C4.25 6 4 7.75 5 9.5Zm6 0h2c1-1.75.75-3.5-.25-4.5c.75-.75.5-2.5-.75-2.5s-1.5 1.75-.75 2.5c-1 1-1.25 2.75-.25 4.5Zm6 0h2c1-1.75.75-3.5-.25-4.5c.75-.75.5-2.5-.75-2.5s-1.5 1.75-.75 2.5c-1 1-1.25 2.75-.25 4.5Z");
}
</style><path class="sw7rsmbdo"/>`,
		"fallback": "uix-sharp:bowling-alley",
	});
}

export default Component;
