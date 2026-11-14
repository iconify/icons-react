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
		"content": `<style>.npmtxh4ng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 9.5l2-3h3l2 3V20a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 9.5 20Zm3.5-3v-2L16 3m-9.5 8.5l-4 2.5l4 7Zm0 3.5h3m0-5.5h7M18.75 6c2.75-1-.25-3 2.5-4");
}
</style><path class="npmtxh4ng"/>`,
		"fallback": "uix-sharp:bee-smoker",
	});
}

export default Component;
