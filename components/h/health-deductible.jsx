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
		"content": `<style>.evld_0u1l {
  d: path("M7.75 3h3.5v4.75H16v3.5h-4.75V16h-3.5v-4.75H3v-3.5h4.75ZM14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="evld_0u1l"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:health-deductible",
	});
}

export default Component;
