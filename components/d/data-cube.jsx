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

.u8054pfip {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9");
}

.zft2m0bit {
  d: path("m12.819 3.433l6.75 3.574a1.75 1.75 0 0 1 .931 1.547v6.892a1.75 1.75 0 0 1-.931 1.547l-6.75 3.574a1.75 1.75 0 0 1-1.638 0l-6.75-3.574a1.75 1.75 0 0 1-.931-1.547V8.554a1.75 1.75 0 0 1 .931-1.547l6.75-3.574a1.75 1.75 0 0 1 1.638 0");
}
</style><g class="hntgybcog"><path class="zft2m0bit"/><path class="u8054pfip"/></g>`,
		"fallback": "uix:data-cube",
	});
}

export default Component;
