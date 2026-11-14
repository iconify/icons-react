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

.s--u4ybvs {
  d: path("m2.5 8.5l9 .75c1 0 1.75-.5 2.5-1.25l1.5-1.5c.75-.75 2-.25 1.75.75L16.75 9H19c1.4 0 2.5 1.1 2.5 2.5V13c0 1.4-1.1 2.5-2.5 2.5l-7.5-.5l-9 1m19-3.75H19");
}

.t2-5nrb_e {
  d: path("M3.75 12.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="s--u4ybvs"/><path class="t2-5nrb_e"/></g>`,
		"fallback": "uix:allergy-test",
	});
}

export default Component;
