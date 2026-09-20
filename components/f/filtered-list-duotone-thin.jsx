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
		"content": `<style>.g_okxob7c {
  d: path("M9 19.5h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m3tfe9bwc {
  fill: currentColor;
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.qj5yzibzr {
  d: path("M9 16.5h6");
}
</style><g class="hntgybcog"><path class="m3tfe9bwc"/><path class="mjze8rg7o"/><path class="qj5yzibzr"/><path class="g_okxob7c"/></g>`,
		"fallback": "iconmind:filtered-list-duotone-thin",
	});
}

export default Component;
