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

.kc1yf3bro {
  d: path("M6.5 11a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.pqf31jbuh {
  d: path("M9.344 10.288a2.75 2.75 0 0 1 1.944-1.944");
}

.wbq0bwb-m {
  d: path("m3 9l1.5 11h15L21 9");
}
</style><g class="hntgybcog"><path class="wbq0bwb-m"/><path class="kc1yf3bro"/><path class="pqf31jbuh"/></g>`,
		"fallback": "uix:ice-sphere",
	});
}

export default Component;
