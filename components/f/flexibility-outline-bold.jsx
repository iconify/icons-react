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
		"content": `<style>.icy6dnbvy {
  d: path("M12 8v5");
}

.lseyrkzrr {
  d: path("m6 19 6 -6 6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v9il_wb-q {
  d: path("M6 10h12");
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="w08657bnd"/><path class="icy6dnbvy"/><path class="v9il_wb-q"/><path class="lseyrkzrr"/></g>`,
		"fallback": "iconmind:flexibility-outline-bold",
	});
}

export default Component;
