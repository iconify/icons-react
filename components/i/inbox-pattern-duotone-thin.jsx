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
		"content": `<style>.ab0pu2bjt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f-52c6b3g {
  d: path("M4 10v10h16V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5pns4bso {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 5.5 12 8l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rqm7ypbhc {
  d: path("M9.5 5.5 12 8l2.5 -2.5");
}

.rr985ibot {
  d: path("M12 3v2.5");
}

.z0fx5ccnm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10v10h16V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="z0fx5ccnm"/><path class="ab0pu2bjt"/><path class="m5pns4bso"/><path class="f-52c6b3g"/><path class="rr985ibot"/><path class="rqm7ypbhc"/></g>`,
		"fallback": "iconmind:inbox-pattern-duotone-thin",
	});
}

export default Component;
