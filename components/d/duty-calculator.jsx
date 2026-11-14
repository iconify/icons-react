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
		"content": `<style>.ccm83vb-y {
  d: path("M8.5 3.5h7A3.5 3.5 0 0 1 19 7v10a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17V7a3.5 3.5 0 0 1 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvpicubue {
  d: path("M9.5 6.5h5A1.5 1.5 0 0 1 16 8v.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 8.5V8a1.5 1.5 0 0 1 1.5-1.5M9 13h.01M12 13h.01M15 13h.01M9 16.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><g class="hntgybcog"><path class="ccm83vb-y"/><path class="xvpicubue"/></g>`,
		"fallback": "uix:duty-calculator",
	});
}

export default Component;
