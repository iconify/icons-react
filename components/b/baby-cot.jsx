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
		"content": `<style>.hesm_9k-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5v15.5M20.5 5v15.5M3.5 9h17m-17 8h17M8 9v8m4-8v8m4-8v8");
}
</style><path class="hesm_9k-h"/>`,
		"fallback": "uix-sharp:baby-cot",
	});
}

export default Component;
