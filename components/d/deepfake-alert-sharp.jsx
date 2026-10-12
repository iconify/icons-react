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
		"content": `<style>.mc2kbzk_a {
  cx: 9px;
  cy: 9.5px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.px0dp75uh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 19h.01");
}

.td051lbwu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 12h3.5m7.39 1.42l2.72 6.41l.39.92h-7l.39-.92l2.72-6.41l.39-.92zm-.39 2.83v1.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.woivh0ber {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8.5h.01m3.99 0h.01");
}
</style><g class="ux2u0rbkq"><circle class="mc2kbzk_a"/><path class="woivh0ber"/><path class="td051lbwu"/><path class="px0dp75uh"/></g>`,
		"fallback": "iconoven:deepfake-alert-sharp",
	});
}

export default Component;
