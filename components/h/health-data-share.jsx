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

.tm9y18bqf {
  d: path("M5 13.5h2.5L9 11l2 5.5l1.5-3h1m1 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.5-2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-2.25-3.5l2.5-1.5m-2.5 3l2.5 1.5");
}

.uzguutbop {
  d: path("M12.307 20.5H4.5c-1.1 0-2-.9-2-2v-13c0-1.1.9-2 2-2H9l2 2h8.5c1.1 0 2 .9 2 2v3.852M2.5 8.75h19");
}
</style><g class="hntgybcog"><path class="uzguutbop"/><path class="tm9y18bqf"/></g>`,
		"fallback": "uix:health-data-share",
	});
}

export default Component;
