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
		"content": `<style>.j3o-xebgm {
  d: path("M12 9.5c.5 2 3.25 3 3.25 5.75a3.25 3.25 0 0 1-6.5 0v-1.937L10.5 12v1.5h1c0-1.5-.25-2.5.5-4Z");
}

.m-m3cc3aa {
  d: path("m4.27 8.52l6.71-4.79L12 3l1.02.73l6.71 4.79l1.02.73v12H3.25v-12z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m-m3cc3aa"/><path class="j3o-xebgm"/></g>`,
		"fallback": "iconoven:fire-station-sharp",
	});
}

export default Component;
