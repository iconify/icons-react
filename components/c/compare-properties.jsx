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

.q2icpv3il {
  d: path("m2.761 10.118l2.25-3.3a1.5 1.5 0 0 1 2.478 0l2.25 3.3a1.5 1.5 0 0 1 .261.845V18.5A1.5 1.5 0 0 1 8.5 20H4a1.5 1.5 0 0 1-1.5-1.5v-7.537a1.5 1.5 0 0 1 .261-.845M15.75 4h4a1.75 1.75 0 0 1 1.75 1.75v12.5A1.75 1.75 0 0 1 19.75 20h-4A1.75 1.75 0 0 1 14 18.25V5.75A1.75 1.75 0 0 1 15.75 4M12 2.5v19");
}

.q3d1u2b5w {
  d: path("M4.75 20v-3.5h3V20m8.5-12.5h.01m2.99 0h.01M16.25 11h.01m2.99 0h.01m-3.01 9v-3.5h3V20");
}
</style><g class="hntgybcog"><path class="q2icpv3il"/><path class="q3d1u2b5w"/></g>`,
		"fallback": "uix:compare-properties",
	});
}

export default Component;
