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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.okqi2lbic {
  fill: currentColor;
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r8jrqdbor {
  fill: currentColor;
  d: path("M10 16V9.5h3l2 2h2.5V16Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rx2p52bze {
  d: path("M10 16V9.5h3l2 2h2.5V16Z");
}

.sfnyx4wnk {
  d: path("M6 6v14");
}
</style><g class="hntgybcog"><path class="okqi2lbic"/><path class="r8jrqdbor"/><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="rx2p52bze"/></g>`,
		"fallback": "iconmind:bind-mount-duotone-thin",
	});
}

export default Component;
