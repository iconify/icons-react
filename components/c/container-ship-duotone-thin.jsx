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

.r1dvx0b7e {
  d: path("m2 14 4 4h12l4 -4");
}

.rvpsyobke {
  fill: currentColor;
  d: path("M7 9.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2V12a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v7vovvuwg {
  d: path("M7 9.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2V12a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="rvpsyobke"/><path class="r1dvx0b7e"/><path class="v7vovvuwg"/></g>`,
		"fallback": "iconmind:container-ship-duotone-thin",
	});
}

export default Component;
