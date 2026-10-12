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
		"content": `<style>.f6tap8avz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.84 20.34l13.5-13.5a2.25 2.25 0 0 0-3.18-3.18l-13.5 13.5a2.25 2.25 0 0 0 3.18 3.18");
}

.jbnvukuau {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 15.5h.01m2.24-2.25h.01M13 11h.01m3.49-3.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="f6tap8avz"/><path class="jbnvukuau"/></g>`,
		"fallback": "iconoven:bansuri",
	});
}

export default Component;
