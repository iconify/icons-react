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
		"content": `<style>.e2evtpg8i {
  d: path("M9.5 9.5 12 7l2.5 2.5");
}

.em0la2b9h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 14.5 12 17l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fa1bfob4c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 9.5 12 7l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s1pdfd1ij {
  d: path("M9.5 14.5 12 17l2.5 -2.5");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="fa1bfob4c"/><path class="em0la2b9h"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e2evtpg8i"/><path class="s1pdfd1ij"/></g>`,
		"fallback": "iconmind:gauge-metric-duotone-thin",
	});
}

export default Component;
