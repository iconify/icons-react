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
		"content": `<style>.e03jjq99j {
  d: path("M4 7h6");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwor_i7ms {
  d: path("M4 17h14");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qiomh5b_o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 17h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.sl8osqjdc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xx5d32wor {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yw-dgs_nk {
  d: path("M4 12h10");
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="xx5d32wor"/><path class="sl8osqjdc"/><path class="qiomh5b_o"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e03jjq99j"/><path class="yw-dgs_nk"/><path class="nwor_i7ms"/></g>`,
		"fallback": "iconmind:chart-bar-increasing-duotone-thin",
	});
}

export default Component;
