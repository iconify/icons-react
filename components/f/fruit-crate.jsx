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
		"content": `<style>.gsq4mb63t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19v10.5h-19Zm0 5.25h19M2.5 10A3.25 3.25 0 0 1 9 10m0 0a3.25 3.25 0 0 1 6.5 0m0 0a3.25 3.25 0 0 1 6.5 0m-9.75-3.25l1-2.5");
}
</style><path class="gsq4mb63t"/>`,
		"fallback": "uix-sharp:fruit-crate",
	});
}

export default Component;
