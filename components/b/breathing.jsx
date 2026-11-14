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
		"content": `<style>.wqm-ttbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8.5c-2.5-2-6.5.5-6.5 6c0 3.25 1 5.5 3.25 5.5S10 18.75 10 16.5Zm4 0c2.5-2 6.5.5 6.5 6c0 3.25-1 5.5-3.25 5.5S14 18.75 14 16.5ZM12 3v7");
}
</style><path class="wqm-ttbgr"/>`,
		"fallback": "uix-sharp:breathing",
	});
}

export default Component;
