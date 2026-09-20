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
		"content": `<style>.gjmq94baq {
  d: path("M15 11v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.tzv123bil {
  d: path("M9 10v5");
}

.wrji4lgnj {
  d: path("M12 8v7");
}
</style><g class="hntgybcog"><path class="n09nomjwg"/><path class="tzv123bil"/><path class="wrji4lgnj"/><path class="gjmq94baq"/></g>`,
		"fallback": "iconmind:api-analytics-outline-thin",
	});
}

export default Component;
