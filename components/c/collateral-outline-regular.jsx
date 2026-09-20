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

.asjt_p6in {
  d: path("M10.5 15a1.5 1.5 0 0 1 3 0");
}

.cf2pd_8sh {
  d: path("M9 15h6v3H9Z");
}

.dvfmj91gv {
  d: path("M6 11v10h12V11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="cf2pd_8sh"/><path class="asjt_p6in"/></g>`,
		"fallback": "iconmind:collateral-outline-regular",
	});
}

export default Component;
