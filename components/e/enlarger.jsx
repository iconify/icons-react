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
		"content": `<style>.s7fmnd4mp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-3 0V3m-3 4h3M6 4h9v6H6Zm3 6h3v2H9Zm.5 2L7 17m4.5-5l2.5 5");
}
</style><path class="s7fmnd4mp"/>`,
		"fallback": "uix-sharp:enlarger",
	});
}

export default Component;
