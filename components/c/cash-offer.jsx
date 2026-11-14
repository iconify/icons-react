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
		"content": `<style>.h_cfezcov {
  d: path("m7.222 12.056l2.75-2.588a1.5 1.5 0 0 1 2.056 0l2.75 2.588a1.5 1.5 0 0 1 .472 1.092V15a1.5 1.5 0 0 1-1.5 1.5h-5.5a1.5 1.5 0 0 1-1.5-1.5v-1.852a1.5 1.5 0 0 1 .472-1.092M4.5 9h.01m12.99 7h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utd01wb5f {
  d: path("M5.125 6.5h11.75A2.625 2.625 0 0 1 19.5 9.125v6.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 15.875v-6.75A2.625 2.625 0 0 1 5.125 6.5");
}

.zw-jawvfn {
  d: path("M5 6.5v-2h16.5V16h-2");
}
</style><g class="hntgybcog"><path class="utd01wb5f"/><path class="zw-jawvfn"/><path class="h_cfezcov"/></g>`,
		"fallback": "uix:cash-offer",
	});
}

export default Component;
