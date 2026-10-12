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

.ie50qbcyb {
  cx: 12px;
  cy: 12px;
  r: 3.25px;
}

.lw81labzt {
  d: path("M15 6.8A6 6 0 1 1 6.8 15M9 17.2A6 6 0 1 1 17.2 9");
}

.pb72_kbtk {
  d: path("M20.69 15.16a9.25 9.25 0 0 1-17.38 0m0-6.32a9.25 9.25 0 0 1 17.38 0");
}
</style><g class="hntgybcog"><circle class="ie50qbcyb"/><path class="lw81labzt"/><path class="pb72_kbtk"/></g>`,
		"fallback": "iconoven:black-hole",
	});
}

export default Component;
