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
		"content": `<style>.abcqgrf_w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 17 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.boj5jfb_k {
  d: path("M13.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ks612kq_w {
  d: path("m7 17 5 -5");
}

.mliavyjyi {
  fill: currentColor;
  d: path("M13.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.x9ne0caxf {
  d: path("M7 8h12");
}

.zvzssgbom {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 8h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="mliavyjyi"/><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="zvzssgbom"/><path class="abcqgrf_w"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="x9ne0caxf"/><path class="ks612kq_w"/><path class="boj5jfb_k"/></g>`,
		"fallback": "iconmind:budget-forecast-duotone-regular",
	});
}

export default Component;
