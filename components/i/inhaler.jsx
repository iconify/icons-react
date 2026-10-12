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
		"content": `<style>.axlrqabvj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.25 14.5h.01m.74 3h.01m-.76 3h.01");
}

.wmsphx-1a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.75h4a1 1 0 0 1 1 1v3.75h4.75a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H12a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 6 19.5v-7.75a1 1 0 0 1 1-1m.5 0v-6.5A1.25 1.25 0 0 1 8.75 3h1A1.25 1.25 0 0 1 11 4.25v6.5Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="wmsphx-1a"/><path class="axlrqabvj"/></g>`,
		"fallback": "iconoven:inhaler",
	});
}

export default Component;
