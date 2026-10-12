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
		"content": `<style>.mofoi37tv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 17.4a2.75 2.75 0 0 0 4.8 0");
}

.mtmv_3buk {
  cx: 8px;
  cy: 8px;
  r: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ro-1oabxs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 16h10.5a5.25 5.25 0 0 1-10.5 0");
}

.v8khciw_t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 6.5h.01m2.99 0h.01M8 9h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="mtmv_3buk"/><path class="v8khciw_t"/><path class="ro-1oabxs"/><path class="mofoi37tv"/></g>`,
		"fallback": "iconoven:coconut",
	});
}

export default Component;
