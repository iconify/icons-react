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

.uepyaybdp {
  fill: currentColor;
  d: path("m5 11 4.5 -4.5h5L19 11Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uhf5s-b6r {
  d: path("m5 11 4.5 -4.5h5L19 11Z");
}

.v0b-4fwch {
  d: path("m2 19 5 -5h10l5 5Z");
}

.yhgteobra {
  fill: currentColor;
  d: path("m2 19 5 -5h10l5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yhgteobra"/><path class="uepyaybdp"/><path class="v0b-4fwch"/><path class="uhf5s-b6r"/></g>`,
		"fallback": "iconmind:commodity-duotone-thin",
	});
}

export default Component;
