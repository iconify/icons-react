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
		"content": `<style>.bbktlbcro {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10h7m-7 3h7m-7 3h4.5");
}

.thuciqbpu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 6.25h9a2.5 2.5 0 0 1 2.5 2.5v1.5h2a2.5 2.5 0 0 1 2.5 2.5v.5a2.5 2.5 0 0 1-2.5 2.5h-2v1.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5v-8.5a2.5 2.5 0 0 1 2.5-2.5");
}

.urn9fgb8u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.75 13h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="thuciqbpu"/><path class="urn9fgb8u"/><path class="bbktlbcro"/></g>`,
		"fallback": "iconoven:cutting-board",
	});
}

export default Component;
