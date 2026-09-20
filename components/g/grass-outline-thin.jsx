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
		"content": `<style>.giopbjb9g {
  d: path("M5 19v-7l3 -3");
}

.h_alycbda {
  d: path("M10 19v-9l3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb5uptbbe {
  d: path("M16 19v-7l3 -3");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="giopbjb9g"/><path class="h_alycbda"/><path class="lb5uptbbe"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:grass-outline-thin",
	});
}

export default Component;
