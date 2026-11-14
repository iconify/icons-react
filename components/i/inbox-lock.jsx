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
		"content": `<style>.im1mdrbtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h5l1.5 2.5h5L16 12h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6h6v4.5H9Zm1.25 0V4.75a1.75 1.75 0 0 1 3.5 0V6");
}
</style><path class="im1mdrbtd"/>`,
		"fallback": "uix-sharp:inbox-lock",
	});
}

export default Component;
