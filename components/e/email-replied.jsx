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

.k_ji0cbtm {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}

.qr_qq3bht {
  d: path("m17 15l-1.75 1.75L17 18.5");
}

.rfw-t--vp {
  d: path("m6 7.5l5 3.5l5-3.5m5 13.25v-1.5a2.5 2.5 0 0 0-2.5-2.5h-3.25");
}
</style><g class="hntgybcog"><path class="k_ji0cbtm"/><path class="rfw-t--vp"/><path class="qr_qq3bht"/></g>`,
		"fallback": "uix:email-replied",
	});
}

export default Component;
