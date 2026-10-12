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
		"content": `<style>.j0_lc_r7y {
  d: path("M13.75 2.75v5.5h5.5m-7.25 4v6m0-6l-1.333-1H8.25v6h2.417l1.333 1l1.333-1h2.417v-6h-2.417l-1.333 1");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="j0_lc_r7y"/></g>`,
		"fallback": "iconoven:file-epub-sharp",
	});
}

export default Component;
