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
		"content": `<style>.a02u7bbwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20v-7.5a4.5 4.5 0 0 1 9 0V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1ZM8.5 8V3m-2 0h4m-2 2.5h5.75m0 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0L19 4.25");
}
</style><path class="a02u7bbwx"/>`,
		"fallback": "uix-sharp:hazard-gas-pressure",
	});
}

export default Component;
