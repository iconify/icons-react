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

.nctrrd8br {
  d: path("M4.75 14.25a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 1 0-14.5 0M7 4.5c0-1.5 2-2 5-2s5 .5 5 2Zm5 0v7");
}

.rs83okbxd {
  d: path("M11.25 11.5h1.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 12.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="nctrrd8br"/><path class="rs83okbxd"/></g>`,
		"fallback": "uix:e-unicycle",
	});
}

export default Component;
