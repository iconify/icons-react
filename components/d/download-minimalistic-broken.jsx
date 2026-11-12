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

.iah3itbam {
  d: path("M12 3V16M8 11.625L12 16L16 11.625");
}

.kbcdf4iop {
  d: path("M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487");
}
</style><g class="hntgybcog"><path class="iah3itbam"/><path class="kbcdf4iop"/></g>`,
		"fallback": "solar:download-minimalistic-broken",
	});
}

export default Component;
