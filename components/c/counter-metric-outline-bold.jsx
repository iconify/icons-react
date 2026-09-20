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
		"content": `<style>.hwmj2eixw {
  d: path("M7 8.5v9");
}

.m0wo8tb6s {
  d: path("M4.5 9 7 6.5 9.5 9");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u7sb4-hdn {
  d: path("m14.5 13 2.5 2.5 2.5 -2.5");
}

.ulyohmb5e {
  d: path("M17 6.5v9");
}
</style><g class="s0phu2bbs"><path class="hwmj2eixw"/><path class="m0wo8tb6s"/><path class="ulyohmb5e"/><path class="u7sb4-hdn"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:counter-metric-outline-bold",
	});
}

export default Component;
