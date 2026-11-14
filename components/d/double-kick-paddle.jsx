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
		"content": `<style>.gq65is47y {
  d: path("M8.5 11.5L12 15l3.5-3.5M12 15v5.5M6.5 8h.01M17.5 8h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jvymac-ri {
  d: path("M2.5 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="jvymac-ri"/><path class="gq65is47y"/></g>`,
		"fallback": "uix:double-kick-paddle",
	});
}

export default Component;
