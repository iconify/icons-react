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
		"content": `<style>.n-gfupbvn {
  d: path("M10.25 9.5h3.5v4h-3.5ZM5 13.5h14V17H5ZM3 20h18");
}

.sb2u44b5v {
  d: path("M9.25 6.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sb2u44b5v"/><path class="n-gfupbvn"/></g>`,
		"fallback": "uix-sharp:hand-stamp",
	});
}

export default Component;
