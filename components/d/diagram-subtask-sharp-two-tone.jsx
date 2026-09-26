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

.hnd7v4yjn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L14 2C14.5523 2 15 2.4477 15 3L15 8C15 8.5523 14.5523 9 14 9L3 9C2.4477 9 2 8.5523 2 8L2 3C2 2.4477 2.4477 2 3 2ZM10 15L21 15C21.5523 15 22 15.4477 22 16L22 21C22 21.5523 21.5523 22 21 22L10 22C9.4477 22 9 21.5523 9 21L9 16C9 15.4477 9.4477 15 10 15Z");
  stroke: none;
}

.x8yn27m5p {
  d: path("M3 3L14 3L14 8L3 8L3 3ZM10 16L21 16L21 21L10 21L10 16ZM6 8L6 18.5L10 18.5");
}
</style><g class="gp_8x1bzb"><path class="hnd7v4yjn"/><path class="x8yn27m5p"/></g>`,
		"fallback": "keyline-icons:diagram-subtask-sharp-two-tone",
	});
}

export default Component;
