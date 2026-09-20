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

.iz111jbgq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 6 4 -4 4 4 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.wlr6jzb8s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 11 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z35tx4bdc {
  d: path("m3 6 4 -4 4 4 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="iz111jbgq"/><path class="wlr6jzb8s"/><path class="yu-j7jb_g"/><path class="z35tx4bdc"/><path class="mqnae981n"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:denoise-duotone-thin",
	});
}

export default Component;
