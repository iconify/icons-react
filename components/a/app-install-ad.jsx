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

.iql60_bru {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M12 6.5v8");
}

.zu_c56dfk {
  d: path("M8.75 11.25L12 14.5l3.25-3.25m-4.75 7h3");
}
</style><g class="hntgybcog"><path class="iql60_bru"/><path class="zu_c56dfk"/></g>`,
		"fallback": "uix:app-install-ad",
	});
}

export default Component;
