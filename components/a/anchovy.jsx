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
		"content": `<style>.ksmpncclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c3-3 8.5-2.75 13.5-1L21 8l-1.5 4l1.5 4l-4.5-3C11.5 14.75 6 15 3 12Zm3.5-.25h.01");
}
</style><path class="ksmpncclo"/>`,
		"fallback": "uix-sharp:anchovy",
	});
}

export default Component;
