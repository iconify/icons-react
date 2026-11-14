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
		"content": `<style>.ntiynf5ac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.25h14v3.5H5Zm0 3.5l-1 12h6.75l1.25-7l1.25 7H20l-1-12");
}
</style><path class="ntiynf5ac"/>`,
		"fallback": "uix-sharp:cycling-shorts",
	});
}

export default Component;
