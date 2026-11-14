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
		"content": `<style>.beqlmob4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h18v4H3Zm1.5 4h15v9h-15Zm7.5-4v13m0-13c-2.5 0-5-1-5-2.75S10 3 12 7.5C14 3 17 3 17 4.75S14.5 7.5 12 7.5Z");
}
</style><path class="beqlmob4y"/>`,
		"fallback": "uix-sharp:grant-dao",
	});
}

export default Component;
