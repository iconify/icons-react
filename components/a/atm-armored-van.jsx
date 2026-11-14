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

.wywtiva-g {
  d: path("M2.5 17V9a2 2 0 0 1 2-2H14v10ZM14 10h4l3.5 3v4H14");
}

.z_bvngbol {
  d: path("M5.25 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M7.5 10H9a1.5 1.5 0 0 1 1.5 1.5v.5A1.5 1.5 0 0 1 9 13.5H7.5A1.5 1.5 0 0 1 6 12v-.5A1.5 1.5 0 0 1 7.5 10");
}
</style><g class="hntgybcog"><path class="wywtiva-g"/><path class="z_bvngbol"/></g>`,
		"fallback": "uix:atm-armored-van",
	});
}

export default Component;
