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
		"content": `<style>.cvoep2bmy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i7ne-pbyy {
  d: path("M5 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kzt32ybrc {
  d: path("M5 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rbu4r4_fa {
  fill: currentColor;
  d: path("M5 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.wdz8jebrc {
  fill: currentColor;
  d: path("M5 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="cvoep2bmy"/><path class="wdz8jebrc"/><path class="rbu4r4_fa"/><path class="zrwkhybyf"/><path class="t87ohzbeq"/><path class="s7eyaw7qq"/><path class="kzt32ybrc"/><path class="i7ne-pbyy"/></g>`,
		"fallback": "iconmind:feature-duotone-thin",
	});
}

export default Component;
