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
		"content": `<style>.dh9t8vo3f {
  d: path("M11 21h5v-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ph8gnzbfo {
  d: path("M8 3v7c0 2 .75 3.75 2 5l6 6");
}
</style><g class="hntgybcog"><path class="ph8gnzbfo"/><path class="dh9t8vo3f"/></g>`,
		"fallback": "uix:arrow-curve-down-right",
	});
}

export default Component;
