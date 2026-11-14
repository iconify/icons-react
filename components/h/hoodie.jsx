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

.lgjhfybiy {
  d: path("M8 6L3 9.5l1.75 5l1.75-.75v7.75h11v-7.75l1.75.75l1.75-5L16 6M8 6a4 4 0 0 1 8 0");
}

.n6r1f2bae {
  d: path("M8 6q4 4.5 8 0M9.25 21.5V18l1.25-2h3l1.25 2v3.5");
}
</style><g class="hntgybcog"><path class="lgjhfybiy"/><path class="n6r1f2bae"/></g>`,
		"fallback": "uix:hoodie",
	});
}

export default Component;
