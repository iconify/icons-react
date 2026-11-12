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

.ue8ht3b0f {
  d: path("M3 12L16 12M11.625 8L16 12L11.625 16");
}

.y69324s2k {
  d: path("M21 20L21 16M21 12L21 4");
}
</style><g class="hntgybcog"><path class="ue8ht3b0f"/><path class="y69324s2k"/></g>`,
		"fallback": "solar:arrow-right-to-line-broken",
	});
}

export default Component;
