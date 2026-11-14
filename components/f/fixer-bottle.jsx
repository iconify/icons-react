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
		"content": `<style>.r_oleufuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h12v14.5H5Zm2.5-4h7v4h-7ZM17 9.5h1.5a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H17m-9.25-2.5h6.5");
}
</style><path class="r_oleufuv"/>`,
		"fallback": "uix-sharp:fixer-bottle",
	});
}

export default Component;
