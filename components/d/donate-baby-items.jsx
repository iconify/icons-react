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
		"content": `<style>.k56rnobel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.05 21.5h-9.3V9h9.75v4.15M4.25 6.5H15V9H4.25ZM8 6.5V5a1.75 1.75 0 0 1 3.5 0v1.5M4.75 13h2.5m-2.5 3.5h2.5m10.75 5L15.5 19c-1-1-.75-3.5 1.25-3.5c.75 0 1 .5 1.25 1c.25-.5.5-1 1.25-1c2 0 2.25 2.5 1.25 3.5Z");
}
</style><path class="k56rnobel"/>`,
		"fallback": "uix-sharp:donate-baby-items",
	});
}

export default Component;
