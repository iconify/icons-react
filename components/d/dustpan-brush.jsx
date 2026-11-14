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
		"content": `<style>.xnagu2jcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21H12l-1.75-7.5h-6Zm4.75-7.5V8m11-5.5v6m-3 0h6V12h-6Zm.5 3.5L15 21h6.5l-.75-9");
}
</style><path class="xnagu2jcc"/>`,
		"fallback": "uix-sharp:dustpan-brush",
	});
}

export default Component;
