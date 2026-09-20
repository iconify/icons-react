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
		"content": `<style>.bk5n09bgv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gl0vd86ea {
  d: path("M18 7v10");
}

.h26bvabki {
  d: path("M3 9v6");
}

.hraf8u3ac {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nngli2bzi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tmc4aacim {
  d: path("M21 9v6");
}

.uuob7-_wx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.xhm9ckc2y {
  d: path("M6 7v10");
}

.zjfasgbxn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="bk5n09bgv"/><path class="hraf8u3ac"/><path class="uuob7-_wx"/><path class="zjfasgbxn"/><path class="nngli2bzi"/><path class="vslz5yb3q"/><path class="xhm9ckc2y"/><path class="gl0vd86ea"/><path class="h26bvabki"/><path class="tmc4aacim"/></g>`,
		"fallback": "iconmind:dumbbell-duotone-regular",
	});
}

export default Component;
