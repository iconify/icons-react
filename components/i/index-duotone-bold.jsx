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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.einbtqqgb {
  d: path("M7 12h13");
}

.m09wmabak {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 12h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mldnorr-p {
  d: path("M7 17h13");
}

.n4vsam_gb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 7h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.rxxtm7qkj {
  d: path("M7 7h13");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tod-pseec {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 17h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="n4vsam_gb"/><path class="m09wmabak"/><path class="tod-pseec"/><path class="r3faxubne"/><path class="rxxtm7qkj"/><path class="einbtqqgb"/><path class="mldnorr-p"/></g>`,
		"fallback": "iconmind:index-duotone-bold",
	});
}

export default Component;
