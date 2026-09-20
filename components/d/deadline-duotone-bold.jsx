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
		"content": `<style>.e-48xt6xm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12.96 5.66a7 7 0 1 1 -5.92 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fhbl5kbmk {
  d: path("M21 3v18");
}

.oe2u-obal {
  d: path("M12.96 5.66a7 7 0 1 1 -5.92 0");
}

.ot6fqe_uf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qaaffjxln {
  d: path("M10 12h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ttvusebsk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u4_zcfcdm {
  d: path("M10 7v5");
}

.ykk9winxx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 7v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="e-48xt6xm"/><path class="ykk9winxx"/><path class="ot6fqe_uf"/><path class="ttvusebsk"/><path class="oe2u-obal"/><path class="u4_zcfcdm"/><path class="qaaffjxln"/><path class="fhbl5kbmk"/></g>`,
		"fallback": "iconmind:deadline-duotone-bold",
	});
}

export default Component;
