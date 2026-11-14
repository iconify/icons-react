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

.l7bhpqbrk {
  d: path("m17.443 8.123l2-.8A1.5 1.5 0 0 1 21.5 8.716v2.568a1.5 1.5 0 0 1-2.057 1.393l-2-.8a1.5 1.5 0 0 1-.943-1.393v-.968a1.5 1.5 0 0 1 .943-1.393M11 14v4.5h3.5V14m-12-6h3.25M2.5 12h3.25");
}

.vvio3tbzp {
  d: path("M11.125 6h2.75A2.625 2.625 0 0 1 16.5 8.625v2.75A2.625 2.625 0 0 1 13.875 14h-2.75A2.625 2.625 0 0 1 8.5 11.375v-2.75A2.625 2.625 0 0 1 11.125 6");
}
</style><g class="hntgybcog"><path class="vvio3tbzp"/><path class="l7bhpqbrk"/></g>`,
		"fallback": "uix:handheld-shot",
	});
}

export default Component;
