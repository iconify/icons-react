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
		"content": `<style>.einbtqqgb {
  d: path("M7 12h13");
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

.i1wzz86py {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 17h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mldnorr-p {
  d: path("M7 17h13");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rls-tsgvm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 12h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rxxtm7qkj {
  d: path("M7 7h13");
}

.s4g6c2bbl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 7h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="s4g6c2bbl"/><path class="rls-tsgvm"/><path class="i1wzz86py"/><path class="r3faxubne"/><path class="rxxtm7qkj"/><path class="einbtqqgb"/><path class="mldnorr-p"/></g>`,
		"fallback": "iconmind:index-duotone-thin",
	});
}

export default Component;
