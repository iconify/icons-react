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
		"content": `<style>.b8k7hnbic {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m18 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d9o-_rb6e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.kaj4_cbkd {
  d: path("m6 8 4 4 -4 4");
}

.kes5k2fvf {
  d: path("m18 8 -4 4 4 4");
}

.pagvq_bik {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 8 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wc2iww91l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="wc2iww91l"/><path class="pagvq_bik"/><path class="d9o-_rb6e"/><path class="b8k7hnbic"/><path class="jcxg2bbvb"/><path class="kaj4_cbkd"/><path class="jlfl_ccwj"/><path class="kes5k2fvf"/></g>`,
		"fallback": "iconmind:contradiction-duotone-bold",
	});
}

export default Component;
