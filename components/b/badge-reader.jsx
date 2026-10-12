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

.mg0d3bbct {
  d: path("M14.5 7.25h3m-3.75 7a3 3 0 0 1 4.5 0");
}

.n6lqnqbzl {
  width: 5.5px;
  height: 8px;
  x: 2.75px;
  y: 8px;
  rx: 1.25px;
}

.nz93q4b-m {
  width: 8.5px;
  height: 16.5px;
  x: 11.75px;
  y: 3.75px;
  rx: 2px;
}

.vyjzzzb5j {
  d: path("M4.75 10.25h1.5");
}
</style><g class="hntgybcog"><rect class="n6lqnqbzl"/><path class="vyjzzzb5j"/><rect class="nz93q4b-m"/><path class="mg0d3bbct"/></g>`,
		"fallback": "iconoven:badge-reader",
	});
}

export default Component;
