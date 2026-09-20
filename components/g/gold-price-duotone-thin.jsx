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

.rwt37ub5x {
  d: path("m5 9.5 4 -4 3 3L18.5 2");
}

.u1klnyb3u {
  d: path("m2 18.5 5 -5h10l5 5Z");
}

.x60be2bhk {
  fill: currentColor;
  d: path("m2 18.5 5 -5h10l5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="x60be2bhk"/><path class="u1klnyb3u"/><path class="rwt37ub5x"/></g>`,
		"fallback": "iconmind:gold-price-duotone-thin",
	});
}

export default Component;
