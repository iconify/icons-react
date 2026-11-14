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
		"content": `<style>.t3xtfmbca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm4 4.5h.01m2.99 0h7.5M7 12h.01M10 12h5.5M7 16.5h.01m2.99 0h6.5");
}
</style><path class="t3xtfmbca"/>`,
		"fallback": "uix-sharp:guest-list",
	});
}

export default Component;
