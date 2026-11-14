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
		"content": `<style>.xl5_-i9ju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 11.5L12.5 18a4.25 4.25 0 0 1-6-6l7-7a2.83 2.83 0 0 1 4 4L11 15.5a1.42 1.42 0 0 1-2-2l6-6");
}
</style><path class="xl5_-i9ju"/>`,
		"fallback": "uix-sharp:attach",
	});
}

export default Component;
