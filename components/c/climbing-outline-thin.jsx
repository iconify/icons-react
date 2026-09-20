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
		"content": `<style>.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksg_s6b5u {
  d: path("m8 16 2 2 -2 2");
}

.win67qb0s {
  d: path("m14 11 2 2 -2 2");
}

.y2k1-rbcb {
  d: path("m8 6 2 2 -2 2");
}
</style><g class="hntgybcog"><path class="diipsobkl"/><path class="y2k1-rbcb"/><path class="win67qb0s"/><path class="ksg_s6b5u"/></g>`,
		"fallback": "iconmind:climbing-outline-thin",
	});
}

export default Component;
