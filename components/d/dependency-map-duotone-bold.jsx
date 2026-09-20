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
		"content": `<style>.bkuclybie {
  fill: currentColor;
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g6btd475d {
  fill: currentColor;
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hdfltzesn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6.5 10.5 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lc642cchm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m17.5 10.5 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mn-a1zb6m {
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n9q35emrt {
  d: path("m17.5 10.5 -4 4");
}

.rencte-ct {
  fill: currentColor;
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s25-orfog {
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tdux9oy4s {
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.xh38rmboq {
  d: path("m6.5 10.5 4 4");
}
</style><g class="s0phu2bbs"><path class="g6btd475d"/><path class="bkuclybie"/><path class="rencte-ct"/><path class="hdfltzesn"/><path class="lc642cchm"/><path class="mn-a1zb6m"/><path class="s25-orfog"/><path class="tdux9oy4s"/><path class="xh38rmboq"/><path class="n9q35emrt"/></g>`,
		"fallback": "iconmind:dependency-map-duotone-bold",
	});
}

export default Component;
