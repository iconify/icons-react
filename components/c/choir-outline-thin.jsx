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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2lsbgbpx {
  d: path("M14 17a4 4 0 0 1 8 0");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nnidkxr0z {
  d: path("M2 17a4 4 0 0 1 8 0");
}

.pb1wrt76j {
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.zzl1n0_hp {
  d: path("M8 15a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="lo7kp72nh"/><path class="pemn838wn"/><path class="pb1wrt76j"/><path class="nnidkxr0z"/><path class="zzl1n0_hp"/><path class="k2lsbgbpx"/></g>`,
		"fallback": "iconmind:choir-outline-thin",
	});
}

export default Component;
