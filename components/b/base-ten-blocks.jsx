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
		"content": `<style>.xa7b6-bdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h3v11H3ZM9 3h12v12H9Zm0 4h12M9 11h12m-8-8v12m4-12v12");
}
</style><path class="xa7b6-bdt"/>`,
		"fallback": "uix-sharp:base-ten-blocks",
	});
}

export default Component;
