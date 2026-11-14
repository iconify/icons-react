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

.i1xxpnvzs {
  d: path("M7 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 8V3h10v5");
}

.kap-jqbyq {
  d: path("m7 12.5l5 3.5l5-3.5");
}

.kbzrjrl8g {
  d: path("M8.75 12h6.5A1.75 1.75 0 0 1 17 13.75v6a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 19.75v-6A1.75 1.75 0 0 1 8.75 12");
}
</style><g class="hntgybcog"><path class="i1xxpnvzs"/><path class="kbzrjrl8g"/><path class="kap-jqbyq"/></g>`,
		"fallback": "uix:envelope-print",
	});
}

export default Component;
