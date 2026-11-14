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

.k-3ptfbsx {
  d: path("m11 4l2 4.5l-2.5 3.5l3 3.5l-2 4.5");
}

.lbma92bjw {
  d: path("M4.25 4h15.5a1.75 1.75 0 0 1 1.75 1.75v12.5A1.75 1.75 0 0 1 19.75 20H4.25a1.75 1.75 0 0 1-1.75-1.75V5.75A1.75 1.75 0 0 1 4.25 4");
}
</style><g class="hntgybcog"><path class="lbma92bjw"/><path class="k-3ptfbsx"/></g>`,
		"fallback": "uix:foundation-crack",
	});
}

export default Component;
