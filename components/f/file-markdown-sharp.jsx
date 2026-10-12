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
		"content": `<style>.khs3-achu {
  d: path("M13.75 2.75v5.5h5.5m-11.5 9.5v-6.5L10 14l2.25-2.75v6.5m3-6.5v6.5m-1.5-1.5l1.5 1.5l1.5-1.5");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="khs3-achu"/></g>`,
		"fallback": "iconoven:file-markdown-sharp",
	});
}

export default Component;
