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
		"content": `<style>.efm-cmbhw {
  d: path("M9.541 21.176A9.5 9.5 0 0 1 7.985 3.39m6.474-.566a9.5 9.5 0 0 1 1.556 17.786");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2kp2g75r {
  d: path("M7.25 9.25L12 12l4.75-2.75M12 12v5.5");
}

.wjoobkbtd {
  d: path("M21.5 5.25L20.5 8l-2.75-1M2.5 18.75l1-2.75l2.75 1m6.502-10.065l3.25 1.882a1.5 1.5 0 0 1 .748 1.298v3.77a1.5 1.5 0 0 1-.748 1.298l-3.25 1.882a1.5 1.5 0 0 1-1.504 0l-3.25-1.882a1.5 1.5 0 0 1-.748-1.298v-3.77a1.5 1.5 0 0 1 .748-1.298l3.25-1.882a1.5 1.5 0 0 1 1.504 0");
}
</style><g class="hntgybcog"><path class="efm-cmbhw"/><path class="wjoobkbtd"/><path class="k2kp2g75r"/></g>`,
		"fallback": "uix:auto-reorder",
	});
}

export default Component;
