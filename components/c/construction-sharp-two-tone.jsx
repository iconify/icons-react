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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hrder_yhr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3L22 3C22.5523 3 23 3.4477 23 4L23 11C23 11.5523 22.5523 12 22 12L2 12C1.4477 12 1 11.5523 1 11L1 4C1 3.4477 1.4477 3 2 3Z");
  stroke: none;
}

.s1n1m9kln {
  d: path("M2 4L22 4L22 11L2 11ZM5.5 11L12.5 4M11.5 11L18.5 4M6 11L6 20M18 11L18 20M3 20L9 20M15 20L21 20");
}
</style><g class="gp_8x1bzb"><path class="hrder_yhr"/><path class="s1n1m9kln"/></g>`,
		"fallback": "keyline-icons:construction-sharp-two-tone",
	});
}

export default Component;
