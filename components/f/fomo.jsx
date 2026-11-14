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

.n9yn0h1jb {
  d: path("M16.5 3c2 2 3.5 3.5 3.5 6a3.5 3.5 0 0 1-7 0c0-1.5.75-2.5 1.5-3.25c.25 1.5 1.25 2.25 2.25 2.25c0-1.5-1.25-3.5-.25-5");
}

.v6pe-qbmm {
  d: path("M6.5 17.5L10 14l2.5 2l4-3.5");
}

.y_e09wbqu {
  d: path("M3 2.5V21h18");
}
</style><g class="hntgybcog"><path class="y_e09wbqu"/><path class="v6pe-qbmm"/><path class="n9yn0h1jb"/></g>`,
		"fallback": "uix:fomo",
	});
}

export default Component;
