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
		"content": `<style>.bic9n3bdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5H13v9l5.75 1.5c1.75.5 2.75 1.5 2.75 2.75s-.75 1.75-1.75 1.75H7.5Zm2.75 15v4m-3.75 0H14m-6.5-16H13");
}
</style><path class="bic9n3bdf"/>`,
		"fallback": "uix-sharp:foot-form",
	});
}

export default Component;
