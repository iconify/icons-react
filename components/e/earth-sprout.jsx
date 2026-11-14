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
		"content": `<style>.qwgldg5km {
  d: path("M5 15a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.sn4_ctbzs {
  d: path("M8.5 15a3.5 7 0 1 0 7 0a3.5 7 0 1 0-7 0ZM5 15h14m-7-7V5.5m0 0q.75-3 4.5-3q-.75 3-4.5 3Zm0 0q-.75-3-4.5-3q.75 3 4.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qwgldg5km"/><path class="sn4_ctbzs"/></g>`,
		"fallback": "uix-sharp:earth-sprout",
	});
}

export default Component;
