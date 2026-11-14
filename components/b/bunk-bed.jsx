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
		"content": `<style>.nmw7frtoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m17-18v18m-17-11h17m-17 8h17M6 6.5h4.5V10H6Zm0 8h4.5V18H6Z");
}
</style><path class="nmw7frtoh"/>`,
		"fallback": "uix-sharp:bunk-bed",
	});
}

export default Component;
