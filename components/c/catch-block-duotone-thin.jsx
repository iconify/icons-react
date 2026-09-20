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

.p7air0nan {
  fill: currentColor;
  d: path("M11 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rr985ibot {
  d: path("M12 3v2.5");
}

.v7xfanbfw {
  d: path("M11 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.z0fx5ccnm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10v10h16V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="p7air0nan"/><path class="z0fx5ccnm"/><path class="ab0pu2bjt"/><path class="f-52c6b3g"/><path class="rr985ibot"/><path class="v7xfanbfw"/></g>`,
		"fallback": "iconmind:catch-block-duotone-thin",
	});
}

export default Component;
