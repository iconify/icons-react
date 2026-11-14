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

.hqbue_aah {
  d: path("M5.25 10.75v9.75h6.85m6.65-8.75v-1");
}

.l75onybyg {
  d: path("M8 20.5v-5h4v.9m0 3.7v.4m2.5-2.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.tsjqhoq0r {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0");
}
</style><g class="hntgybcog"><path class="tsjqhoq0r"/><path class="hqbue_aah"/><path class="l75onybyg"/></g>`,
		"fallback": "uix:bagel-shop",
	});
}

export default Component;
