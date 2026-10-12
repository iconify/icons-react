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

.jj13gfhhu {
  width: 5px;
  height: 3px;
  x: 5.5px;
  y: 11.5px;
  rx: 1.5px;
}

.kw0yqvblm {
  width: 15px;
  height: 4px;
  x: 4.5px;
  y: 14.5px;
  rx: 1.5px;
}

.l_5owzbnb {
  d: path("M4.5 16.5H2.75m16.75 0h1.75");
}

.zpyd0tbkc {
  width: 5px;
  height: 3px;
  x: 13.5px;
  y: 11.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="jj13gfhhu"/><rect class="zpyd0tbkc"/><rect class="kw0yqvblm"/><path class="l_5owzbnb"/></g>`,
		"fallback": "iconoven:griddle",
	});
}

export default Component;
