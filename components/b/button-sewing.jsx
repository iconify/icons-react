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
		"content": `<style>.djkl9lb1y {
  d: path("m3 3l2.25 1.25L7.5 3l2.25 1.25L12 3l2.25 1.25L16.5 3l2.25 1.25L21 3l-1.25 2.25L21 7.5l-1.25 2.25L21 12l-1.25 2.25L21 16.5l-1.25 2.25L21 21l-2.25-1.25L16.5 21l-2.25-1.25L12 21l-2.25-1.25L7.5 21l-2.25-1.25L3 21l1.25-2.25L3 16.5l1.25-2.25L3 12l1.25-2.25L3 7.5l1.25-2.25Z");
}

.fvkpe6lsn {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m3 1h.01M14 13h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la6-kmmne {
  d: path("M10 13q2-3.5 4 0");
}
</style><g class="hntgybcog"><path class="djkl9lb1y"/><path class="fvkpe6lsn"/><path class="la6-kmmne"/></g>`,
		"fallback": "uix:button-sewing",
	});
}

export default Component;
