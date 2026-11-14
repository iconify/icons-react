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
		"content": `<style>.qew2vtb8b {
  d: path("M2.5 16h19l-2 4.5H5l-1.5-2Zm2-6h15c0 3.5-3 6-7.5 6s-7.5-2.5-7.5-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgdwhxbdz {
  d: path("M7.25 7a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0Zm6 0a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qew2vtb8b"/><path class="zgdwhxbdz"/></g>`,
		"fallback": "uix-sharp:cliff-nest",
	});
}

export default Component;
