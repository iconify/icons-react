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

.qxak8bbmg {
  d: path("M2.5 10c0-4.5 3-7.5 7.5-7.5c2.75 0 4.5 1.25 4.5 3");
}

.yka-tbm_q {
  d: path("M10.268 13.756a4.25 4.25 0 0 1 4.857-6.937");
}

.z4bp8gbjd {
  d: path("M10.75 10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L17.5 15v6.5m-6.25-9l2.75 3v6m3.5-6.5c1.5-.25 2.5-1 3-2m-18-3C3 13 5 15 8 15.75");
}
</style><g class="hntgybcog"><path class="qxak8bbmg"/><path class="yka-tbm_q"/><path class="z4bp8gbjd"/></g>`,
		"fallback": "uix:hip",
	});
}

export default Component;
