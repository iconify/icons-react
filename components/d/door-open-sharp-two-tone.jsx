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
		"content": `<style>.bpv-z28ia {
  d: path("M6 4L14 2L14 22L6 19.68L6 4ZM18 21L18 3L14 3M1 21L10.5517 21M14 21L23 21M11 10L11 14");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns69e1t-d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.7575 3.0299L13.7575 1.0299C13.8368 1.01 13.9182 1 14 1C14.5523 1 15 1.4477 15 2L15 22C15 22.5523 14.5523 23 14 23C13.9058 23 13.812 22.9867 13.7215 22.9604L5.7215 20.6404C5.2941 20.5165 5 20.125 5 19.68L5 4C5 3.5411 5.3123 3.1411 5.7575 3.0299Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ns69e1t-d"/><path class="bpv-z28ia"/></g>`,
		"fallback": "keyline-icons:door-open-sharp-two-tone",
	});
}

export default Component;
