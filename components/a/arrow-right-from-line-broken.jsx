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
		"content": `<style>.bjr4uf7pk {
  d: path("M3 4L3 8M3 12L3 20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymvg5pbqm {
  d: path("M8 12L21 12M16.625 8L21 12L16.625 16");
}
</style><g class="hntgybcog"><path class="bjr4uf7pk"/><path class="ymvg5pbqm"/></g>`,
		"fallback": "solar:arrow-right-from-line-broken",
	});
}

export default Component;
