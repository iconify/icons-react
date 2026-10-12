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
		"content": `<style>.kddcd8xhg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75H8a2 2 0 0 0-2 2V9.5A2.5 2.5 0 0 1 3.5 12A2.5 2.5 0 0 1 6 14.5v3.75a2 2 0 0 0 2 2h.75m6.5-16.5H16a2 2 0 0 1 2 2V9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0-2.5 2.5v3.75a2 2 0 0 1-2 2h-.75");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="kddcd8xhg"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:braces",
	});
}

export default Component;
