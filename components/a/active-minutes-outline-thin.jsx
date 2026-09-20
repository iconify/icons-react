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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6trofguq {
  d: path("M12 21a9 9 0 1 1 9 -9");
}

.n0hr0gbrt {
  d: path("M14 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="m6trofguq"/><path class="zirb-hbnv"/><path class="n0hr0gbrt"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:active-minutes-outline-thin",
	});
}

export default Component;
