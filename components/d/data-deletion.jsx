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

.ptbz_dtnt {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.2 2.3 2.2 5.5 2.5m6 1l5 5m0-5l-5 5");
}

.pv7bmdgou {
  d: path("M12.82 21.235q-.405.015-.82.015c-4.4 0-8-1.25-8-2.75v-13C4 4 7.6 2.75 12 2.75S20 4 20 5.5v7.255");
}

.qjw1zh9xs {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75q.42 0 .831-.015m4.952-.844q.386-.14.713-.296m1.048-.686c.295-.286.456-.592.456-.909");
}
</style><g class="hntgybcog"><path class="pv7bmdgou"/><path class="qjw1zh9xs"/><path class="ptbz_dtnt"/></g>`,
		"fallback": "uix:data-deletion",
	});
}

export default Component;
