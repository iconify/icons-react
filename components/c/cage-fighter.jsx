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
		"content": `<style>.ea0kw2hdn {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5m-.375 0V12m11-9.5V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvdmv_bpy {
  d: path("M9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3 13c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5");
}
</style><g class="hntgybcog"><path class="ea0kw2hdn"/><path class="uvdmv_bpy"/></g>`,
		"fallback": "uix:cage-fighter",
	});
}

export default Component;
