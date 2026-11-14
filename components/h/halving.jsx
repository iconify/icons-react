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
		"content": `<style>.fxaoq2zrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3.5a8.5 8.5 0 0 0 0 17Zm3 0a8.5 8.5 0 0 1 0 17Z");
}
</style><path class="fxaoq2zrt"/>`,
		"fallback": "uix-sharp:halving",
	});
}

export default Component;
