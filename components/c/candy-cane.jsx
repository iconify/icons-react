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
		"content": `<style>.gxngfmb0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20V8.5a6 6 0 0 1 12 0v2a1.75 1.75 0 0 1-3.5 0v-2a2.5 2.5 0 0 0-5 0V20A1.75 1.75 0 0 1 6 20Zm0-5.5L9.5 12M6 19l3.5-2.5");
}
</style><path class="gxngfmb0w"/>`,
		"fallback": "uix-sharp:candy-cane",
	});
}

export default Component;
