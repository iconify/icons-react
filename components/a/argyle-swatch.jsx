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
		"content": `<style>.ymxi2q4nk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm4.5 0L21 16.5m-18-9L16.5 21M3 16.5L16.5 3m-9 18L21 7.5");
}
</style><path class="ymxi2q4nk"/>`,
		"fallback": "uix-sharp:argyle-swatch",
	});
}

export default Component;
