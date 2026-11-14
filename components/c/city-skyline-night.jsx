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

.ru69vacof {
  d: path("M3 21v-9h5v9m0 0V7h6v14");
}

.zymy04bqw {
  d: path("M20.5 14A5 5 0 1 1 16 6.5a4 4 0 0 0 4.5 7.5");
}
</style><g class="hntgybcog"><path class="ru69vacof"/><path class="zymy04bqw"/></g>`,
		"fallback": "uix:city-skyline-night",
	});
}

export default Component;
