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
		"content": `<style>.geh18sbrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9h11v7h-11ZM3 20.5L5 19l2 1.5L9 19l2 1.5l2-1.5l2 1.5l2-1.5l2 1.5l2-1.5M18 4.25H6m2-2l-2 2l2 2");
}
</style><path class="geh18sbrk"/>`,
		"fallback": "uix-sharp:friction",
	});
}

export default Component;
