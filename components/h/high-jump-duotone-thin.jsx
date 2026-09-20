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

.joid91atd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 15c2 -7 10 -7 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k_gogwbfe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l7lis87jb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 8h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.ml3aqbbkk {
  d: path("M4 8v12");
}

.t0tr22eyz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t1tm72bkp {
  d: path("M20 8v12");
}

.zyvg9rbxb {
  d: path("M6 15c2 -7 10 -7 12 0");
}
</style><g class="hntgybcog"><path class="l7lis87jb"/><path class="t0tr22eyz"/><path class="k_gogwbfe"/><path class="joid91atd"/><path class="m1mjigbsi"/><path class="ml3aqbbkk"/><path class="t1tm72bkp"/><path class="zyvg9rbxb"/></g>`,
		"fallback": "iconmind:high-jump-duotone-thin",
	});
}

export default Component;
