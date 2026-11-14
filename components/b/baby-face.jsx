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
		"content": `<style>.ha9xtnb5j {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pjbbv2bym {
  d: path("M12 5c-1-2 1.75-3 2.25-1.25M9 12.5h.01m5.99 0h.01M10 17q2 1.75 4 0");
}
</style><g class="hntgybcog"><path class="ha9xtnb5j"/><path class="pjbbv2bym"/></g>`,
		"fallback": "uix:baby-face",
	});
}

export default Component;
