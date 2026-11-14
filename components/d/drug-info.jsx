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
		"content": `<style>.m6035xbes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h6V7h-6Zm5.9 19H3V7h11v4.1m-5.5.4v4m-2-2h4m2.5 4a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5-2.25h.01m-.01 2.5V20");
}
</style><path class="m6035xbes"/>`,
		"fallback": "uix-sharp:drug-info",
	});
}

export default Component;
