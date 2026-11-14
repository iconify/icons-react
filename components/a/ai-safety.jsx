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
		"content": `<style>.p3qvuebvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 17H3.5V6h14v4.7m-7-7.7v3M8 10v2.5m5-2.5v2.3m5 1.2l3.5 1.25v2.75c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.75Z");
}
</style><path class="p3qvuebvm"/>`,
		"fallback": "uix-sharp:ai-safety",
	});
}

export default Component;
