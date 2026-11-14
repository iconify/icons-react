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
		"content": `<style>.d2w6nhe6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 17.362a7 7 0 1 1 0-10.724M4.5 10h8m-8 4h8");
}
</style><path class="d2w6nhe6e"/>`,
		"fallback": "uix-sharp:currency-euro",
	});
}

export default Component;
