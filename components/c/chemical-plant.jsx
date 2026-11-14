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
		"content": `<style>.pt-atfj3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V7a3.5 3.5 0 0 1 7 0v14m3 0V10a3.5 3.5 0 0 1 7 0v11m-18 0h19m-11-7h3");
}
</style><path class="pt-atfj3j"/>`,
		"fallback": "uix-sharp:chemical-plant",
	});
}

export default Component;
