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

.t9is4eb6v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4L21 4C21.5523 4 22 4.4477 22 5L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 5C2 4.4477 2.4477 4 3 4Z");
  stroke: none;
}

.ynac2cb7k {
  d: path("M3 5L21 5L21 21L3 21L3 5ZM6 11L18 11M8 2L8 8M16 2L16 8");
}
</style><g class="gp_8x1bzb"><path class="t9is4eb6v"/><path class="ynac2cb7k"/></g>`,
		"fallback": "keyline-icons:calendar-sharp-two-tone",
	});
}

export default Component;
