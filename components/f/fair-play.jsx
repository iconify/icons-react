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
		"content": `<style>.er5wwv2_h {
  d: path("M6 12.5C2 6 4 2.5 8 2.5S13 6 9.5 11M8 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxansg_on {
  d: path("M9.5 11h11v3.5h-6.25A5 5 0 1 1 9.5 11");
}
</style><g class="hntgybcog"><path class="uxansg_on"/><path class="er5wwv2_h"/></g>`,
		"fallback": "uix:fair-play",
	});
}

export default Component;
