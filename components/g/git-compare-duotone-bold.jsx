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
		"content": `<style>.epoh96bbt {
  d: path("M16 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kdla8x0uu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9.5 12 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l576i2b9k {
  d: path("M18 15.5V10h-5.5");
}

.lehy25blz {
  fill: currentColor;
  d: path("M16 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mngbkpbkl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 15.5V10h-5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mql4mbb5m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 8.5V14h5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t1sjjacis {
  d: path("M4 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.u5a77nl7p {
  d: path("M6 8.5V14h5.5");
}

.vxdgzqbaj {
  fill: currentColor;
  d: path("M4 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x_46rtfdb {
  d: path("m9.5 12 2 2 -2 2");
}

.y7za30bps {
  d: path("m14.5 8 -2 2 2 2");
}

.ypllm1bof {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14.5 8 -2 2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="vxdgzqbaj"/><path class="lehy25blz"/><path class="mql4mbb5m"/><path class="kdla8x0uu"/><path class="mngbkpbkl"/><path class="ypllm1bof"/><path class="t1sjjacis"/><path class="epoh96bbt"/><path class="u5a77nl7p"/><path class="x_46rtfdb"/><path class="l576i2b9k"/><path class="y7za30bps"/></g>`,
		"fallback": "iconmind:git-compare-duotone-bold",
	});
}

export default Component;
