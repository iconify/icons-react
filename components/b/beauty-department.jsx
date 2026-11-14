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
		"content": `<style>.bu2g5fb1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13h11v8.5h-11ZM8 10h8v3H8Zm1.25 0V5.75l5.5-3.25V10M6.5 16.25h11");
}
</style><path class="bu2g5fb1p"/>`,
		"fallback": "uix-sharp:beauty-department",
	});
}

export default Component;
