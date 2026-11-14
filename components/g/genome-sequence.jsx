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
		"content": `<style>.cj3xrvjwb {
  d: path("M3 9c4.5 0 4.5-6 9-6s4.5 6 9 6M3 13h6m3 0h9M3 17h3m3 0h8M3 21h10m3 0h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrmjxqbnv {
  d: path("M3 3c4.5 0 4.5 6 9 6s4.5-6 9-6");
}
</style><g class="hntgybcog"><path class="hrmjxqbnv"/><path class="cj3xrvjwb"/></g>`,
		"fallback": "uix:genome-sequence",
	});
}

export default Component;
