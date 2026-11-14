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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.h4-nh27tr {
  d: path("M8.5 13v-2.5A2.5 2.5 0 0 1 11 8m2.5 5v-2.5A2.5 2.5 0 0 1 16 8");
}

.mx-xdexdb {
  d: path("M8.5 13H11v-2.5H8.5m5 2.5H16v-2.5h-2.5m-5 6.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="h4-nh27tr"/><path class="mx-xdexdb"/></g>`,
		"fallback": "uix-sharp:citation",
	});
}

export default Component;
