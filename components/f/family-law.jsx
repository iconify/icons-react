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
		"content": `<style>.py637t62k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 20.5c0-3.5 2-6.5 5-6.5c1.778 0 3.029 1.054 3.754 2.642M14.75 5.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 9.5L13.5 18.5a1.25 1.25 0 0 0 2.5 0Zm6 0L19.5 18.5a1.25 1.25 0 0 0 2.5 0Zm-6 0h6m-3-1.5v7.75m-1.75 0h3.5");
}
</style><path class="py637t62k"/>`,
		"fallback": "uix-sharp:family-law",
	});
}

export default Component;
