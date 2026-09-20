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
		"content": `<style>.eyx95fmam {
  d: path("M4 16a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 7a5.5 5.5 0 0 1 4.5 9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uih_zvhtv {
  d: path("M4 21h16");
}
</style><g class="hntgybcog"><path class="eyx95fmam"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:cloud-weather-outline-thin",
	});
}

export default Component;
