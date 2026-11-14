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
		"content": `<style>.xats8yd5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5H7V13H3.5Zm6 10l2.5 6c1.5 0 2.5-1 2-3l-.5-3h5c1.25 0 2-1 1.75-2.25l-1-5.75c-.25-1-1-1.75-2-1.75H9.5Z");
}
</style><path class="xats8yd5h"/>`,
		"fallback": "uix-sharp:ai-thumbs-down",
	});
}

export default Component;
