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
		"content": `<style>.bm7qzzsvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-17 0v17h15v-17m-15 2.75h15M4.5 9h15m-15 2.75h15m-3 0v4.75");
}
</style><path class="bm7qzzsvz"/>`,
		"fallback": "uix-sharp:blinds-open",
	});
}

export default Component;
