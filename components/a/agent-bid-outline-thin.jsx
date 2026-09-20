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

.ikiprn9sq {
  d: path("M9 14h6");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.y5493mbgk {
  d: path("M9.5 11.5 12 9l2.5 2.5");
}
</style><g class="hntgybcog"><path class="ugdbidcqi"/><path class="y5493mbgk"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:agent-bid-outline-thin",
	});
}

export default Component;
