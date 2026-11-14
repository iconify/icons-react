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
		"content": `<style>.o_st8qbyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l-5.75 7.75a7.25 7.25 0 1 0 11.5 0Zm0 8V18m-3.75-3.75h7.5");
}
</style><path class="o_st8qbyi"/>`,
		"fallback": "uix-sharp:drop-plus",
	});
}

export default Component;
