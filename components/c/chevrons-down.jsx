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
		"content": `<style>.easrepbqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 12.5L12 18l-5.5-5.5m11-6L12 12L6.5 6.5");
}
</style><path class="easrepbqt"/>`,
		"fallback": "uix-sharp:chevrons-down",
	});
}

export default Component;
