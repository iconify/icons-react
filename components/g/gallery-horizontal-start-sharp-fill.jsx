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

.ok6a1es4o {
  fill: currentColor;
  d: path("M3 2L13 2C13.5523 2 14 2.4477 14 3L14 21C14 21.5523 13.5523 22 13 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
  stroke: none;
}

.tnbgngbwo {
  d: path("M17 4L17 20M21 6L21 18");
}
</style><g class="gp_8x1bzb"><path class="ok6a1es4o"/><path class="tnbgngbwo"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-start-sharp-fill",
	});
}

export default Component;
