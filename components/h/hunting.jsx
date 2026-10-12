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
		"content": `<style>.cmgyb_itx {
  d: path("M12 4a8 8 0 1 1 0 16a8 8 0 1 1 0-16m0-1.25V4m0 16v1.25M2.75 12H4m16 0h1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8_s--blb {
  d: path("M10.5 11.75C9.4 11.25 9 10 9.25 8m.05 2.3l-1.55-.9m5.75 2.35C14.6 11.25 15 10 14.75 8m-.05 2.3l1.55-.9M10 12.75a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l-.9 3.6a1.15 1.15 0 0 1-2.2 0Z");
}
</style><g class="hntgybcog"><path class="cmgyb_itx"/><path class="m8_s--blb"/></g>`,
		"fallback": "iconoven:hunting",
	});
}

export default Component;
