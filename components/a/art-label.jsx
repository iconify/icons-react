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

.p2wsm_bqo {
  d: path("M8.5 5H19a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 19H8.5l-6-7Z");
}

.pn09qjb-c {
  d: path("M6.75 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.75-2H18m-5.5 4H16");
}
</style><g class="hntgybcog"><path class="p2wsm_bqo"/><path class="pn09qjb-c"/></g>`,
		"fallback": "uix:art-label",
	});
}

export default Component;
