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
		"content": `<style>.pix837b7l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3.75h-2.5a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h2.5m7.5-16.5h2.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1h-2.5");
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
</style><g class="y9tr6bcfx"><path class="pix837b7l"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:brackets",
	});
}

export default Component;
