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
		"content": `<style>.bh5cnabah {
  d: path("M10 13.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lc--3dbyp {
  d: path("M7 11v10.5h10V11");
}

.pvcr_tbus {
  d: path("M2.5 3h19M12 3v3m-7 7l7-7l7 7");
}
</style><g class="hntgybcog"><path class="pvcr_tbus"/><path class="lc--3dbyp"/><path class="bh5cnabah"/></g>`,
		"fallback": "uix:bird-box",
	});
}

export default Component;
