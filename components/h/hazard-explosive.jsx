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

.n3_jwin4j {
  d: path("M3.5 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.vgp74dbuy {
  d: path("M14.5 10q.5-2.5 3-3m0-4.25v1.5M20.25 7h1.5m-2-2.25L21 3.5");
}
</style><g class="hntgybcog"><path class="n3_jwin4j"/><path class="vgp74dbuy"/></g>`,
		"fallback": "uix:hazard-explosive",
	});
}

export default Component;
