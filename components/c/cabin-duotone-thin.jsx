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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.dvfmj91gv {
  d: path("M6 11v10h12V11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hus09kb1m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 16h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l_k_j9beu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l4quinbfm {
  d: path("M16 6V3h3v3");
}

.nl66y9men {
  d: path("M6 16h12");
}

.r_x4yex3d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 6V3h3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvm7ubgvb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 11v10h12V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="l_k_j9beu"/><path class="vvm7ubgvb"/><path class="hus09kb1m"/><path class="r_x4yex3d"/><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="nl66y9men"/><path class="l4quinbfm"/></g>`,
		"fallback": "iconmind:cabin-duotone-thin",
	});
}

export default Component;
