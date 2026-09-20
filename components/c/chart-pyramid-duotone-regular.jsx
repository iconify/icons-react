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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.kakiz1beo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lve95kzti {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 15h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9-mlwb2l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 10h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v9il_wb-q {
  d: path("M6 10h12");
}

.x11b48bwb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y4k_22w_l {
  d: path("M8 5h8");
}
</style><g class="nrj6p8qat"><path class="x11b48bwb"/><path class="o9-mlwb2l"/><path class="lve95kzti"/><path class="kakiz1beo"/><path class="y4k_22w_l"/><path class="v9il_wb-q"/><path class="m-p3hbclp"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:chart-pyramid-duotone-regular",
	});
}

export default Component;
