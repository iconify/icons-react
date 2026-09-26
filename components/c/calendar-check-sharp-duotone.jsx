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

.ojfk5ud9u {
  d: path("M6 11L18 11M8 2L8 8M16 2L16 8M14.7071 17.7071L17 20L21.2929 15.7071");
}

.p6vnw5bzz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4L21 4C21.5523 4 22 4.4477 22 5L22 11C22 11.5523 21.5523 12 21 12L12 12L12 21C12 21.5523 11.5523 22 11 22L3 22C2.4477 22 2 21.5523 2 21L2 5C2 4.4477 2.4477 4 3 4Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="p6vnw5bzz"/><path class="ojfk5ud9u"/></g>`,
		"fallback": "keyline-icons:calendar-check-sharp-duotone",
	});
}

export default Component;
