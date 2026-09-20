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

.juq6zh-od {
  d: path("M6.5 15.5 4 18l2.5 2.5");
}

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.qq2awqbbs {
  d: path("M17.5 15.5 20 18l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="o-4bk_b4n"/><path class="o8od38cnm"/><path class="juq6zh-od"/><path class="qq2awqbbs"/></g>`,
		"fallback": "iconmind:exchange-rate-outline-thin",
	});
}

export default Component;
