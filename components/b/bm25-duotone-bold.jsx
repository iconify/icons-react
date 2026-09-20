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
		"content": `<style>.a0a606r5d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bqi_y7t7w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f2_a4gbcx {
  d: path("M2 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f7cjbzb4e {
  fill: currentColor;
  d: path("M2 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g-4ao_sjh {
  fill: currentColor;
  d: path("M2 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.he2cqebcu {
  d: path("M2 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n96__jb1n {
  d: path("M6 12h11");
}

.nb_bhac3g {
  fill: currentColor;
  d: path("M2 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o24qh25eq {
  d: path("M2 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ov2ejkbhi {
  d: path("M6 17h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s13m_784z {
  d: path("M6 7h15");
}

.vbz0i0dio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 7h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="nb_bhac3g"/><path class="g-4ao_sjh"/><path class="f7cjbzb4e"/><path class="vbz0i0dio"/><path class="bqi_y7t7w"/><path class="a0a606r5d"/><path class="f2_a4gbcx"/><path class="s13m_784z"/><path class="he2cqebcu"/><path class="n96__jb1n"/><path class="o24qh25eq"/><path class="ov2ejkbhi"/></g>`,
		"fallback": "iconmind:bm25-duotone-bold",
	});
}

export default Component;
