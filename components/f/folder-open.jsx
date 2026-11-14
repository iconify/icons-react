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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k54vw-bkn {
  d: path("m4.06 16.554l1.733-4A1.75 1.75 0 0 1 7.399 11.5h11.435a1.75 1.75 0 0 1 1.606 2.446l-1.733 4A1.75 1.75 0 0 1 17.101 19H5.666a1.75 1.75 0 0 1-1.606-2.446");
}

.rhq9kgb7w {
  d: path("M3 19V7a2 2 0 0 1 2-2h4.5l2 2H17a2 2 0 0 1 2 2v2.5");
}
</style><g class="hntgybcog"><path class="rhq9kgb7w"/><path class="k54vw-bkn"/></g>`,
		"fallback": "uix:folder-open",
	});
}

export default Component;
