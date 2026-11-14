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
		"content": `<style>.qonuq5btm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 6l-4.5 6L7 18M17 6l4.5 6l-4.5 6m-8-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="qonuq5btm"/>`,
		"fallback": "uix-sharp:code-science",
	});
}

export default Component;
