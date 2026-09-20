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
		"content": `<style>.b3mr86y8d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 17 4 -4 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hbw5_ccle {
  d: path("m7 17 4 -4 4 4 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.tcvmtxbda {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ze3hawb4v {
  d: path("M14 6v12");
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="b3mr86y8d"/><path class="tcvmtxbda"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="hbw5_ccle"/><path class="ze3hawb4v"/></g>`,
		"fallback": "iconmind:annotation-chart-duotone-thin",
	});
}

export default Component;
