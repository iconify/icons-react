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
		"content": `<style>.b63klgb4v {
  d: path("M12.625 10h4.75A2.625 2.625 0 0 1 20 12.625v4.75A2.625 2.625 0 0 1 17.375 20h-4.75A2.625 2.625 0 0 1 10 17.375v-4.75A2.625 2.625 0 0 1 12.625 10");
}

.e2h9i4bpl {
  d: path("M10 17.5H4.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V10m-10-7.5v15m5-15V10m-10-2.5h15m-15 5H10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e2h9i4bpl"/><path class="b63klgb4v"/></g>`,
		"fallback": "uix:convolution",
	});
}

export default Component;
