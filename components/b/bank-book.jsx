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

.le5pnccev {
  d: path("M3 19V5a2.5 2.5 0 0 1 2.5-2.5H13v19H5.5A2.5 2.5 0 0 1 3 19");
}

.slbpnol2f {
  d: path("M3 19a2.5 2.5 0 0 1 2.5-2.5H13m2.5 1l3-2.75l3 2.75m-4.5 0v4m3-4v4m-4.5 0h6");
}
</style><g class="hntgybcog"><path class="le5pnccev"/><path class="slbpnol2f"/></g>`,
		"fallback": "uix:bank-book",
	});
}

export default Component;
