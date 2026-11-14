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
		"content": `<style>.g0m9-ab9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v16.5m-3.5 0h5.75M4.5 4.5h11M2 9l2.5-4.5L7 9a2.5 2.5 0 0 1-5 0Zm11 0l2.5-4.5L18 9a2.5 2.5 0 0 1-5 0Zm2 7.25h7v5.25h-7Zm2 0V14.5h3v1.75");
}
</style><path class="g0m9-ab9s"/>`,
		"fallback": "uix-sharp:business-liability",
	});
}

export default Component;
