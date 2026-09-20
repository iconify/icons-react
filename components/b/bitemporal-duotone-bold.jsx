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
		"content": `<style>.amt7o88ol {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 12 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ce9iv3bun {
  d: path("M4 3v17");
}

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ks612kq_w {
  d: path("m7 17 5 -5");
}

.mnv4pvbmf {
  d: path("m12 12 6 -6");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o-ypo56nb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pv9lzpb2t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rw2cw9fuy {
  d: path("M4 20h17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ywjxqgbvl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 17 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="k_2z93bzc"/><path class="pv9lzpb2t"/><path class="o-ypo56nb"/><path class="ywjxqgbvl"/><path class="amt7o88ol"/><path class="ce9iv3bun"/><path class="rw2cw9fuy"/><path class="ks612kq_w"/><path class="mnv4pvbmf"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:bitemporal-duotone-bold",
	});
}

export default Component;
