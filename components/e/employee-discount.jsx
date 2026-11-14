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

.pqwekdqlq {
  d: path("M10.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-5.25.5l7-7");
}

.uba_8kbfh {
  d: path("m3.731 10.4l2.981-3.875A2.63 2.63 0 0 1 8.793 5.5h10.082A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625H8.793a2.63 2.63 0 0 1-2.081-1.025L3.731 13.6a2.625 2.625 0 0 1 0-3.2M7.25 12h.01");
}
</style><g class="hntgybcog"><path class="uba_8kbfh"/><path class="pqwekdqlq"/></g>`,
		"fallback": "uix:employee-discount",
	});
}

export default Component;
