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
		"content": `<style>.a_quq5bpv {
  d: path("M5.25 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.e4k0yvb4z {
  d: path("M7.25 7zA4.75 4.75 0 0 1 12 11.75v.5A4.75 4.75 0 0 1 7.25 17a4.75 4.75 0 0 1-4.75-4.75v-.5A4.75 4.75 0 0 1 7.25 7M12 10h8l1.5 1.5v2h-3v2h-3v-2H12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e4k0yvb4z"/><path class="a_quq5bpv"/></g>`,
		"fallback": "uix:car-key",
	});
}

export default Component;
