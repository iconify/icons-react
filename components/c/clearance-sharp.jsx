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
		"content": `<style>.g59u1xbjq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.75 15l4.5-6");
}

.j_h69jb8m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01");
}

.rqqfcuxhu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.25 9.5h.01m5.49 5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yv6ea8bkr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.6 11.08l4.05-4.41l.85-.92h12.75v12.5H8.5l-.85-.92l-4.05-4.41l-.85-.92z");
}
</style><g class="ux2u0rbkq"><path class="yv6ea8bkr"/><path class="j_h69jb8m"/><path class="g59u1xbjq"/><path class="rqqfcuxhu"/></g>`,
		"fallback": "iconoven:clearance-sharp",
	});
}

export default Component;
