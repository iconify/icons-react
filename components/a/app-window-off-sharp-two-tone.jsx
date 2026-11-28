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

.j0y0rvzzm {
  d: path("M21 21H3V3M1.707 1.7071L22.293 22.293");
}

.tgr6pkb5r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21.707 21.7071C21.526 21.8881 21.276 22 21 22H3C2.448 22 2 21.5523 2 21V3C2 2.7239 2.112 2.4739 2.293 2.2929L21.707 21.7071ZM5.657 2H21C21.552 2 22 2.4477 22 3V18.3431L5.657 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="tgr6pkb5r"/><path class="j0y0rvzzm"/></g>`,
		"fallback": "keyline-icons:app-window-off-sharp-two-tone",
	});
}

export default Component;
