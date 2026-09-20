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

.i5d2grbwo {
  d: path("M13 2H6v14h10V5");
}

.kyrdb7bzq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 8H9v14h10V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s27ukbqxc {
  d: path("M16 8H9v14h10V11");
}

.zn6298aab {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 2H6v14h10V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zn6298aab"/><path class="kyrdb7bzq"/><path class="i5d2grbwo"/><path class="s27ukbqxc"/></g>`,
		"fallback": "iconmind:corpus-duotone-thin",
	});
}

export default Component;
