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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.cypwq7brt {
  d: path("m17 4 4 4");
}

.h-x20cc3f {
  d: path("M2 15a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rch9xfupi {
  d: path("m21 4 -4 4");
}
</style><g class="hntgybcog"><path class="h-x20cc3f"/><path class="coi-np7dk"/><path class="cypwq7brt"/><path class="rch9xfupi"/></g>`,
		"fallback": "iconmind:error-budget-outline-thin",
	});
}

export default Component;
