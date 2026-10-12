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
		"content": `<style>.huw8yc3-v {
  d: path("M13.75 2.75v5.5h5.5M11 4.75h1m1 1.5h-1m-1 1.5h1m1 1.5h-1m-1 1.5h1m-1.5 1.75h3V17h-3zm1.5 1.75v1");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="huw8yc3-v"/></g>`,
		"fallback": "iconoven:file-zip-sharp",
	});
}

export default Component;
