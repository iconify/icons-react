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
		"content": `<style>.pncdzlbgq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 4.5h.01m8.49.25h.01M20 11h.01");
}

.ueqfp4a9g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8a4.5 4.5 0 0 0 6 6a6 6 0 1 1-6-6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ueqfp4a9g"/><path class="pncdzlbgq"/></g>`,
		"fallback": "iconoven:clear-night",
	});
}

export default Component;
