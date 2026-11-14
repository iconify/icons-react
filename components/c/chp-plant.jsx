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
		"content": `<style>.ccg__xzzk {
  d: path("m10 13.75l-2 2.5h3l-2 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xadt2jdfq {
  d: path("M2.5 21V11L8 7.5V11l5.5-3.5V11h2V2.5h5V21Z");
}
</style><g class="hntgybcog"><path class="xadt2jdfq"/><path class="ccg__xzzk"/></g>`,
		"fallback": "uix:chp-plant",
	});
}

export default Component;
