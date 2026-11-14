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
		"content": `<style>.aarw6cciy {
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z");
}

.cmecdbdhd {
  d: path("M7.75 7.75h8.5v8.5h-8.5Zm2.75 0v-2.5m3 2.5v-2.5m-3 11v2.5m3-2.5v2.5M7.75 10.5h-2.5m2.5 3h-2.5m11-3h2.5m-2.5 3h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aarw6cciy"/><path class="cmecdbdhd"/></g>`,
		"fallback": "uix-sharp:container-cpu",
	});
}

export default Component;
