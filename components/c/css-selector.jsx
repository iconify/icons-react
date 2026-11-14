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
		"content": `<style>.op9w640tk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.7 17.5H2.5v-15h15v8.2m-4 6.05a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm5.75 2.5l2.25 2.25");
}
</style><path class="op9w640tk"/>`,
		"fallback": "uix-sharp:css-selector",
	});
}

export default Component;
