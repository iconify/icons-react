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
		"content": `<style>.c6zt4rbvd {
  d: path("M13.75 2.75v5.5h5.5m-11 2.5h7.5v2.5h-7.5Zm0 5h3v2.5h-3ZM14 16h1.75M14 18h1.75");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="c6zt4rbvd"/></g>`,
		"fallback": "iconoven:file-template-sharp",
	});
}

export default Component;
