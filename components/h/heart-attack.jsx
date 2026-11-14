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

.jsh68ybbr {
  fill: currentColor;
  d: path("M7.75 3.5L8 5.75l2.25.25L8.5 7.5l1 2.25l-2.25-1l-1.5 1.75l-.25-2.25L3.25 8L5 6.5L4 4.25l2.25 1Z");
}

.lkcxwyqwl {
  d: path("M13.5 9L12 12l2 1.5m0 0l-1.5 3");
}

.rnrit3b1a {
  d: path("M12.94 5.339C13.835 4.506 15.005 4 16.25 4C18.9 4 21 6.1 21 8.75C21 14.5 12 20 12 20s-5.04-3.08-7.577-7.04");
}
</style><g class="hntgybcog"><path class="rnrit3b1a"/><path class="lkcxwyqwl"/><path class="jsh68ybbr"/></g>`,
		"fallback": "uix:heart-attack",
	});
}

export default Component;
