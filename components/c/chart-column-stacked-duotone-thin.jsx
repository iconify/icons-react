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
		"content": `<style>.e71sokbbi {
  d: path("M9 12v8");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h1qfo9bvs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 6v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n93ox5byq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 8v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.ot7dw_bqz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 14v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pt73j1ikv {
  d: path("M15 14v6");
}

.q8mbydbdl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 12v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.sb7rl7wyu {
  d: path("M9 6v3");
}

.yo-0d--rc {
  d: path("M15 8v3");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="q8mbydbdl"/><path class="h1qfo9bvs"/><path class="ot7dw_bqz"/><path class="n93ox5byq"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e71sokbbi"/><path class="sb7rl7wyu"/><path class="pt73j1ikv"/><path class="yo-0d--rc"/></g>`,
		"fallback": "iconmind:chart-column-stacked-duotone-thin",
	});
}

export default Component;
