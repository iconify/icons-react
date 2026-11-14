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
		"content": `<style>.pcs2lkbck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v8h-19ZM6 8h12m-6 6s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5Z");
}
</style><path class="pcs2lkbck"/>`,
		"fallback": "uix-sharp:ac-dry-mode",
	});
}

export default Component;
