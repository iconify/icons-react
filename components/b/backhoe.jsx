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
		"content": `<style>.gaeeuxbsj {
  d: path("M10.75 11L6 3.25l-2.25 11.5m3.25 0H2.75v3a3 3 0 0 0 3 3h2.5L7.5 18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kz6vg_dkw {
  d: path("M11 11h4V6a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 .9L20 11h.25a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1");
}

.o48oad76n {
  cx: 13px;
  cy: 18.75px;
  r: 1.75px;
}

.yryo9i7wh {
  cx: 19.5px;
  cy: 18.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="kz6vg_dkw"/><circle class="o48oad76n"/><circle class="yryo9i7wh"/><path class="gaeeuxbsj"/></g>`,
		"fallback": "iconoven:backhoe",
	});
}

export default Component;
