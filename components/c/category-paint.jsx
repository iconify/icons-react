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
		"content": `<style>.h7qxi4vgc {
  d: path("M6.625 3.5h10.75A2.625 2.625 0 0 1 20 6.125v.75A2.625 2.625 0 0 1 17.375 9.5H6.625A2.625 2.625 0 0 1 4 6.875v-.75A2.625 2.625 0 0 1 6.625 3.5M12 9.5v4m0 0h-2V21h4v-7.5z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.trm8uhbia {
  d: path("M20 6.5V12h-8");
}
</style><g class="hntgybcog"><path class="h7qxi4vgc"/><path class="trm8uhbia"/></g>`,
		"fallback": "uix:category-paint",
	});
}

export default Component;
