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
		"content": `<style>.gms_xv68n {
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

.oi5srabim {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 17h3v-3h3v-3h3V8h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.p80u_bcab {
  d: path("M7 17h3v-3h3v-3h3V8h3");
}

.r3faxubne {
  d: path("M4 4v16");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="oi5srabim"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="p80u_bcab"/></g>`,
		"fallback": "iconmind:cumulative-metric-duotone-thin",
	});
}

export default Component;
