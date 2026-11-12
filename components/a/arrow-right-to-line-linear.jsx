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

.tgvfhnabb {
  d: path("M21 4L21 20");
}

.ue8ht3b0f {
  d: path("M3 12L16 12M11.625 8L16 12L11.625 16");
}
</style><g class="hntgybcog"><path class="tgvfhnabb"/><path class="ue8ht3b0f"/></g>`,
		"fallback": "solar:arrow-right-to-line-linear",
	});
}

export default Component;
