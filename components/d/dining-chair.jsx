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
		"content": `<style>.c3tazsbkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5v-17a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v17M4.5 13h15m-10-5.5h5");
}
</style><path class="c3tazsbkn"/>`,
		"fallback": "uix-sharp:dining-chair",
	});
}

export default Component;
