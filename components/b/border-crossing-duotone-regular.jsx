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
		"content": `<style>.bgjpknbib {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c438ceftc {
  d: path("M12 17v5");
}

.i9n3fxbli {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 17v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jpdmbcfrc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 10v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mxzk029nb {
  d: path("M12 10v4");
}

.n96aj2bbi {
  d: path("M4 12h15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3srlnbfr {
  d: path("M12 2v5");
}

.sdfde2c8d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 12h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}

.zrbvwbtjz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 2v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zrbvwbtjz"/><path class="jpdmbcfrc"/><path class="i9n3fxbli"/><path class="sdfde2c8d"/><path class="bgjpknbib"/><path class="q3srlnbfr"/><path class="mxzk029nb"/><path class="c438ceftc"/><path class="n96aj2bbi"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:border-crossing-duotone-regular",
	});
}

export default Component;
