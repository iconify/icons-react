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
		"content": `<style>.krz_8cqpc {
  width: 18.5px;
  height: 11.5px;
  x: 2.75px;
  y: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.rlq0cwfub {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 11h.01M16 11h.01");
}

.s_kkqzb4i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8.25a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 1 1 0-5.5m8 0a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 1 1 0-5.5");
}

.u5gt8rbgg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 16.75v3h8.5v-3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="krz_8cqpc"/><path class="s_kkqzb4i"/><path class="rlq0cwfub"/><path class="u5gt8rbgg"/></g>`,
		"fallback": "iconoven:gpu",
	});
}

export default Component;
