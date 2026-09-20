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
		"content": `<style>.dhm9wy0nm {
  d: path("M3 5h10");
}

.doi_mob1c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o50_pabww {
  d: path("m16 12 2 2 4 -4");
}

.o8scmcc3i {
  d: path("M3 12h10");
}

.okl5hsb1s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uxy9sxbfx {
  d: path("M3 19h10");
}

.vl1or3bhv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x_t3nkvhl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="x_t3nkvhl"/><path class="vl1or3bhv"/><path class="doi_mob1c"/><path class="okl5hsb1s"/><path class="dhm9wy0nm"/><path class="o8scmcc3i"/><path class="uxy9sxbfx"/><path class="o50_pabww"/></g>`,
		"fallback": "iconmind:best-of-n-duotone-bold",
	});
}

export default Component;
