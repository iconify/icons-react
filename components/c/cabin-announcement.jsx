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
		"content": `<style>.ejp7yob1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 10.5l7.5-4v11l-7.5-4Zm3.75 5V20m6.641-10.724a4.75 4.75 0 0 1 0 5.448m2.253-7.026a7.5 7.5 0 0 1 0 8.604m2.252-10.181a10.25 10.25 0 0 1 0 11.758");
}
</style><path class="ejp7yob1w"/>`,
		"fallback": "uix-sharp:cabin-announcement",
	});
}

export default Component;
