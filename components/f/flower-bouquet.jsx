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
		"content": `<style>.ehgejbcox {
  d: path("M6.5 11.5L12 15l5.5-3.5M12 8v13.5m0-4.25c-1.5-1.5-3.75-1.5-3.75 0s2.25 1.5 3.75 0c1.5 1.5 3.75 1.5 3.75 0s-2.25-1.5-3.75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vaahigcgo {
  d: path("M10.5 3.5a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3m-7 5a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3m14 0a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3");
}
</style><g class="hntgybcog"><path class="vaahigcgo"/><path class="ehgejbcox"/></g>`,
		"fallback": "uix:flower-bouquet",
	});
}

export default Component;
