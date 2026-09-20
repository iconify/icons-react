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
		"content": `<style>.a9xckwbov {
  d: path("m9 10 2 2 -2 2");
}

.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.br_h3vzli {
  d: path("m15 10 -2 2 2 2");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.lx3jyybfn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qhy91zm_e {
  d: path("M6 12h5");
}

.qlfruhq7c {
  d: path("M13 12h5");
}

.r5u5lrb-w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skzikx2yi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.su_f3o4hp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 10 -2 2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u_6_8ab4e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x87wa6b5t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="x87wa6b5t"/><path class="lx3jyybfn"/><path class="skzikx2yi"/><path class="u_6_8ab4e"/><path class="r5u5lrb-w"/><path class="su_f3o4hp"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="qhy91zm_e"/><path class="a9xckwbov"/><path class="qlfruhq7c"/><path class="br_h3vzli"/></g>`,
		"fallback": "iconmind:context-compress-duotone-bold",
	});
}

export default Component;
