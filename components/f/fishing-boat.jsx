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
		"content": `<style>.l9pgickqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19L18 20.5H6ZM13 8.5h5.5V14H13ZM8 14V3.5m0 1L3.5 11m11 0H17");
}
</style><path class="l9pgickqg"/>`,
		"fallback": "uix-sharp:fishing-boat",
	});
}

export default Component;
