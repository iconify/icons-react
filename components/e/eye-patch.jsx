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
		"content": `<style>.d_dr_3b-h {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M3 8l18-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kda73cczc {
  fill: currentColor;
  d: path("M5.75 10.75a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0");
}

.voktf9o_r {
  d: path("M15.5 10.75h.01M9.5 16.5h5");
}
</style><g class="hntgybcog"><path class="d_dr_3b-h"/><path class="kda73cczc"/><path class="voktf9o_r"/></g>`,
		"fallback": "uix:eye-patch",
	});
}

export default Component;
