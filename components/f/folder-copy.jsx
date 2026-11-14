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
		"content": `<style>.arg1lfbec {
  d: path("M3.5 17V5.5A1.5 1.5 0 0 1 5 4h3l1.5 1.5H16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xo_ra0b-c {
  d: path("M7 10a1.5 1.5 0 0 1 1.5-1.5h3L13 10h6.5a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 7 19Z");
}
</style><g class="hntgybcog"><path class="xo_ra0b-c"/><path class="arg1lfbec"/></g>`,
		"fallback": "uix:folder-copy",
	});
}

export default Component;
