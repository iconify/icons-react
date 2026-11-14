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
		"content": `<style>.sd91ykttd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12V3.5l3 2.5h2l3-2.5v6c3 1.5 5 5.5 5 11.5h-13Zm13 9c3.5 0 4-3 3-5.5M8.5 9h.01");
}
</style><path class="sd91ykttd"/>`,
		"fallback": "uix-sharp:cat-cafe",
	});
}

export default Component;
