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

.kiutrbbgy {
  d: path("M3.5 14.25h10q.75 0 .41.67l-1.07 2.16q-.34.67-1.09.67h-6.5q-.75 0-1.09-.67l-1.07-2.16q-.34-.67.41-.67");
}

.q6w20pbxx {
  d: path("M6 14.25v-3h5v3m-7.75 7c1.5 0 1.75-.75 3.25-.75s1.75.75 3.25.75s1.75-.75 3.25-.75s1.75.75 3.25.75M14 10c1.5-2.5 3.5-4.25 7-5m-2.75-1.75L21 5l-1.5 2.75");
}
</style><g class="hntgybcog"><path class="kiutrbbgy"/><path class="q6w20pbxx"/></g>`,
		"fallback": "iconoven:ferry-route",
	});
}

export default Component;
