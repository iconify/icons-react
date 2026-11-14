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

.o0kadqjah {
  d: path("m2.5 20l19-11m-19 3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8.25-4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.p58_jqboz {
  d: path("m5 12.5l2.75-5.75l5.5 1m0 0L12 3.5h2");
}
</style><g class="hntgybcog"><path class="o0kadqjah"/><path class="p58_jqboz"/></g>`,
		"fallback": "uix:hill-climb-bike",
	});
}

export default Component;
