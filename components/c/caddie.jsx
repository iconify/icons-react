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
		"content": `<style>.bg852we3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2 13.5V19a5 5 0 0 1 10 0v2.5M16 9h4.5v12.5H16Zm1 0l-1-5.5M19.5 9l1.25-5.5");
}
</style><path class="bg852we3o"/>`,
		"fallback": "uix-sharp:caddie",
	});
}

export default Component;
