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
		"content": `<style>.c9c7gubje {
  d: path("M6.5 7v5h11v5");
}

.fwzy69olr {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mnw_-bdju {
  fill: currentColor;
  d: path("M13 19a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nhw4qt96j {
  d: path("M2 5a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.rd_tpe20s {
  d: path("M13 19a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="fwzy69olr"/><path class="mnw_-bdju"/><path class="nhw4qt96j"/><path class="c9c7gubje"/><path class="rd_tpe20s"/></g>`,
		"fallback": "iconmind:dependency-arrow-duotone-thin",
	});
}

export default Component;
