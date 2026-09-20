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
		"content": `<style>.a8o-bmuyf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m2 12 5 5 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ks2swpbkw {
  d: path("m9 12 5 5 8 -8");
}

.r1gclvbbm {
  d: path("m2 12 5 5 8 -8");
}

.sf2p08-cs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 12 5 5 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="a8o-bmuyf"/><path class="sf2p08-cs"/><path class="r1gclvbbm"/><path class="ks2swpbkw"/></g>`,
		"fallback": "iconmind:done-all-duotone-thin",
	});
}

export default Component;
