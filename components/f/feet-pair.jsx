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
		"content": `<style>.g70bs-b2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.5c0-3.5 6.5-4 6.5 0L9.5 18A2.75 2.75 0 0 1 4 18Zm17 0c0-3.5-6.5-4-6.5 0l.5 6.5a2.75 2.75 0 0 0 5.5 0Zm-13-6.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM5 5.5h.01M14 4.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 .75h.01");
}
</style><path class="g70bs-b2g"/>`,
		"fallback": "uix-sharp:feet-pair",
	});
}

export default Component;
