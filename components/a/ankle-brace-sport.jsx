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
		"content": `<style>.q0rll9b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h7v10l6.5 2.5l1.5 1.5v3.5h-15Zm0 5l7 5m0-5l-7 5");
}
</style><path class="q0rll9b0s"/>`,
		"fallback": "uix-sharp:ankle-brace-sport",
	});
}

export default Component;
