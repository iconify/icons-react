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
		"content": `<style>.jjchvubkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V3M2.5 21.5h5m11.5 0V3m-2.5 18.5h5M5 9q7 3.5 14 0M5 3l4.5 1.75L5 6.5Z");
}
</style><path class="jjchvubkc"/>`,
		"fallback": "uix-sharp:finish-line",
	});
}

export default Component;
