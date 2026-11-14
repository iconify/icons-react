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
		"content": `<style>.lh27h98bg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10L12 3.5l8.5 6.5v11h-17Zm5.5.5h6m0 0l-4 7");
}
</style><path class="lh27h98bg"/>`,
		"fallback": "uix-sharp:bingo-hall",
	});
}

export default Component;
