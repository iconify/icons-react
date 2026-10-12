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
		"content": `<style>.c9yxbvq-z {
  d: path("M13.75 2.75v5.5h5.5m-9 2.5H12v8h-1.75m3.5-8H12v1.5m1.75 6.5H12v-1.5m-1-2.5h2");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="c9yxbvq-z"/></g>`,
		"fallback": "iconoven:file-rename-sharp",
	});
}

export default Component;
