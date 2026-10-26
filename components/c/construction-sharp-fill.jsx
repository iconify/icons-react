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
		"content": `<style>.fxezor7mh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 3L22 3C22.5523 3 23 3.4477 23 4L23 11C23 11.5523 22.5523 12 22 12L2 12C1.4477 12 1 11.5523 1 11L1 4C1 3.4477 1.4477 3 2 3ZM5.0858 10L7.9142 10L12.9142 5L10.0858 5L5.0858 10ZM11.0858 10L13.9142 10L18.9142 5L16.0858 5L11.0858 10Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m6ftqsblr {
  d: path("M6 11L6 20M18 11L18 20M3 20L9 20M15 20L21 20");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="fxezor7mh"/><path class="m6ftqsblr"/></g>`,
		"fallback": "keyline-icons:construction-sharp-fill",
	});
}

export default Component;
