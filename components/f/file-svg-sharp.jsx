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
		"content": `<style>.daxx_u6td {
  d: path("M13.75 2.75v5.5h5.5m-11 8.5h2v2h-2Zm5.5-6.5h2v2h-2Zm-4.5 6.5c0-3 4.5-2.25 4.5-5.5");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="daxx_u6td"/></g>`,
		"fallback": "iconoven:file-svg-sharp",
	});
}

export default Component;
