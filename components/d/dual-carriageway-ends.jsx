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
		"content": `<style>.yegd__b_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V14l5-5V2.5m13 19V14l-5-5V2.5m-4 19v-6m0-3v-3m0-3V3");
}
</style><path class="yegd__b_p"/>`,
		"fallback": "uix:dual-carriageway-ends",
	});
}

export default Component;
