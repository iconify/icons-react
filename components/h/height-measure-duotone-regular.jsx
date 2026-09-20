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
		"content": `<style>.cuso263ot {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 3h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dvavr_yjv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 18 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ezik40n3m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 21h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h2-2dgnfu {
  d: path("M12 3v18");
}

.iczafxbjt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5yvsiilv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 6 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rjrs_5bsc {
  d: path("M6 3h12");
}

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}

.vy337188j {
  d: path("m9 18 3 3 3 -3");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="nrj6p8qat"><path class="iczafxbjt"/><path class="k5yvsiilv"/><path class="dvavr_yjv"/><path class="cuso263ot"/><path class="ezik40n3m"/><path class="h2-2dgnfu"/><path class="tdul-wdwn"/><path class="vy337188j"/><path class="rjrs_5bsc"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:height-measure-duotone-regular",
	});
}

export default Component;
