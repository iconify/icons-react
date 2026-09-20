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
		"content": `<style>.ehzfylb8o {
  fill: currentColor;
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gq7a04b8r {
  d: path("M14 14h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l2m4eebfn {
  d: path("M9.27 9.28a3 3 0 1 1 -2.54 0");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.xwm0hzbem {
  d: path("M14 10h5");
}
</style><g class="hntgybcog"><path class="ehzfylb8o"/><path class="okud9xj_d"/><path class="l2m4eebfn"/><path class="xwm0hzbem"/><path class="gq7a04b8r"/></g>`,
		"fallback": "iconmind:id-card-duotone-thin",
	});
}

export default Component;
