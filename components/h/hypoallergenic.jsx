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
		"content": `<style>.b88303byt {
  d: path("M8.5 15.5c0-5 2.5-7.5 7-7.5c0 4.5-2.5 7.5-7 7.5m0 0l4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rkdooe55p {
  d: path("m12 2.5l7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5Z");
}
</style><g class="hntgybcog"><path class="rkdooe55p"/><path class="b88303byt"/></g>`,
		"fallback": "uix:hypoallergenic",
	});
}

export default Component;
