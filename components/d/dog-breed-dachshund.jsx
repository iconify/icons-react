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
		"content": `<style>.hv0nx7fnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10h10L17 6.75q.75-1 1.75-.5l2.5 3q.75 1.5-.75 1.75h-2.25l-1 4H5.5a2.5 2.5 0 0 1 0-5Zm-1.25.25L2.5 8m4 7v3m9-3v3");
}
</style><path class="hv0nx7fnm"/>`,
		"fallback": "uix-sharp:dog-breed-dachshund",
	});
}

export default Component;
