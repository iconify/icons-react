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

.qyvzd5bsf {
  d: path("m8 12.25l3 3l5.25-5.75");
}

.re9ihw14q {
  d: path("M12 2.5c2 1.5 4 2.5 7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5C8 5 10 4 12 2.5");
}
</style><g class="hntgybcog"><path class="re9ihw14q"/><path class="qyvzd5bsf"/></g>`,
		"fallback": "uix:ai-shield",
	});
}

export default Component;
