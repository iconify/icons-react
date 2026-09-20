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
		"content": `<style>.be2wnib8t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.5 12H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c75csrozg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.etqzyebuj {
  d: path("M13 12h2.5");
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n_wlgzbnq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pesxdybze {
  d: path("M3 12h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sf_49krow {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tb33trnmj {
  d: path("M3 18h5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.y7_y8yq8z {
  d: path("M18.5 12H21");
}
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="sf_49krow"/><path class="n_wlgzbnq"/><path class="be2wnib8t"/><path class="c75csrozg"/><path class="xgrfb-bqu"/><path class="pesxdybze"/><path class="etqzyebuj"/><path class="y7_y8yq8z"/><path class="tb33trnmj"/></g>`,
		"fallback": "iconmind:inline-suggestion-duotone-bold",
	});
}

export default Component;
