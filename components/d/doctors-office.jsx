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

.kotx8nbwb {
  d: path("M12.5 11v1.75c0 1.25 1 2.25 2 2.25s2-1 2-2.25V11m-2 4v1.75M13.25 18a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.lqx0yihec {
  d: path("M5 21.5v-17c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v17m-16.5 0h19m-7-10.5h1.75");
}
</style><g class="hntgybcog"><path class="lqx0yihec"/><path class="kotx8nbwb"/></g>`,
		"fallback": "uix:doctors-office",
	});
}

export default Component;
