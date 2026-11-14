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
		"content": `<style>.rrk1l7b9o {
  d: path("M8.5 13a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 6.5h16.5a1.75 1.75 0 0 0 0-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgq2vpjgt {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}
</style><g class="ulnmmdpxh"><path class="wgq2vpjgt"/><path class="rrk1l7b9o"/></g>`,
		"fallback": "uix-sharp:brooch-ancient",
	});
}

export default Component;
