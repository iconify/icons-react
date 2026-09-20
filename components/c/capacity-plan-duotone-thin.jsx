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
		"content": `<style>.dmpyxbc1s {
  d: path("M7 7h12");
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

.mce0zn2zd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 17 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mol-ojbtj {
  d: path("m7 17 8 -8");
}

.nv77yccxr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 7h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="nv77yccxr"/><path class="mce0zn2zd"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="dmpyxbc1s"/><path class="mol-ojbtj"/></g>`,
		"fallback": "iconmind:capacity-plan-duotone-thin",
	});
}

export default Component;
