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
		"content": `<style>.hh9110min {
  d: path("M4 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nbsh9vihc {
  d: path("m16 16 3.5 3.5");
}

.r9wazo8vh {
  d: path("M13 6.5 9.5 10H12l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="hh9110min"/><path class="r9wazo8vh"/><path class="nbsh9vihc"/></g>`,
		"fallback": "iconmind:cache-hit-outline-thin",
	});
}

export default Component;
