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
		"content": `<style>.fwgkvqbcp {
  d: path("M15.75 15.25c0-1.75 1.25-3 2.75-3s2.75 1.25 2.75 3s-1.25 3-2.75 3c-2 0-3.5 1-4.5 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p873oytrc {
  d: path("M3.75 4.75c1.5 0 2.5 1 3 2.5l3.25 11l3.5-11.5c.5-1.5 1.25-2 2.25-2c1.5 0 2 1.25 2 2.5v8");
}
</style><g class="hntgybcog"><path class="p873oytrc"/><path class="fwgkvqbcp"/></g>`,
		"fallback": "iconoven:capricorn",
	});
}

export default Component;
