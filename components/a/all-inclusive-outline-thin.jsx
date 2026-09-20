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
		"content": `<style>.bv1y61bvs {
  d: path("M4 16a8 8 0 0 1 16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.v2r_pnsln {
  d: path("m8 9 3 3 5 -5");
}
</style><g class="hntgybcog"><path class="bv1y61bvs"/><path class="ils7yp4cg"/><path class="v2r_pnsln"/></g>`,
		"fallback": "iconmind:all-inclusive-outline-thin",
	});
}

export default Component;
