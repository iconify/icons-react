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
		"content": `<style>.ug8-5dbwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM11 11l-8.25 8.25M18 18.5c-1-2.5-4-3.25-4-1.25C14 18.5 15 19 16 19c-1.25.75-1 2.75.5 2c.75-.25 1.25-1.25 1.5-2.5Zm0 0c1-2.5 4-3.25 4-1.25C22 18.5 21 19 20 19c1.25.75 1 2.75-.5 2c-.75-.25-1.25-1.25-1.5-2.5Zm0-2V21");
}
</style><path class="ug8-5dbwz"/>`,
		"fallback": "uix-sharp:butterfly-net",
	});
}

export default Component;
