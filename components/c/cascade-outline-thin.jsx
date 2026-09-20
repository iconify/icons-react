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
		"content": `<style>.enu8lyb0i {
  d: path("m12 9.5 2.5 2.5 -2.5 2.5L9.5 12Z");
}

.ewmg6nb_g {
  d: path("m19 16.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5p5yybyx {
  d: path("M5 2.5 7.5 5 5 7.5 2.5 5Z");
}
</style><g class="hntgybcog"><path class="l5p5yybyx"/><path class="enu8lyb0i"/><path class="ewmg6nb_g"/></g>`,
		"fallback": "iconmind:cascade-outline-thin",
	});
}

export default Component;
