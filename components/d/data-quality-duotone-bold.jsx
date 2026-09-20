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
		"content": `<style>.c54duacdo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gi7rbfrai {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n45vxib8e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.o50_pabww {
  d: path("m16 12 2 2 4 -4");
}

.okl5hsb1s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pvfbz5b4i {
  d: path("M3 18h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x22av82oi {
  d: path("M3 12h11");
}
</style><g class="s0phu2bbs"><path class="c54duacdo"/><path class="n45vxib8e"/><path class="gi7rbfrai"/><path class="okl5hsb1s"/><path class="nrqy16b7j"/><path class="x22av82oi"/><path class="pvfbz5b4i"/><path class="o50_pabww"/></g>`,
		"fallback": "iconmind:data-quality-duotone-bold",
	});
}

export default Component;
