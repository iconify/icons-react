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

.nxab-kxlu {
  d: path("M3 5v14");
}

.yr0a_60jr {
  d: path("m19 5 -7 7 7 7");
}
</style><g class="hntgybcog"><path class="nxab-kxlu"/><path class="yr0a_60jr"/></g>`,
		"fallback": "iconmind:chevron-first-outline-thin",
	});
}

export default Component;
