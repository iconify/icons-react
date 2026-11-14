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
		"content": `<style>.cc9t6ybin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9 0h10m-4 0v3.5M21 8v3m-2.5 4.5q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3Z");
}
</style><path class="cc9t6ybin"/>`,
		"fallback": "uix-sharp:ai-api-key",
	});
}

export default Component;
