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
		"content": `<style>.ed-xnxz9s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 12h.01");
}

.f4crteb_g {
  cx: 18px;
  cy: 12px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nytdgjb7c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 9.25h2.5m-2.5 5.5h2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yngu-n7jp {
  cx: 6px;
  cy: 12px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><circle class="yngu-n7jp"/><path class="ed-xnxz9s"/><circle class="f4crteb_g"/><path class="nytdgjb7c"/></g>`,
		"fallback": "iconoven:air-hockey",
	});
}

export default Component;
