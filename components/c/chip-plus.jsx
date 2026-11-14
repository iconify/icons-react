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
		"content": `<style>.hf8qf84mj {
  d: path("M10 3.5h4A3.5 3.5 0 0 1 17.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 17V7A3.5 3.5 0 0 1 10 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpq2f7q_n {
  d: path("M14 3.5a2 2 0 0 1-4 0M2.5 8h4m-4 4h4m-4 4h4m11-8h4m-4 4h4m-4 4h4M12 9.75v5.5M9.25 12.5h5.5");
}
</style><g class="hntgybcog"><path class="hf8qf84mj"/><path class="wpq2f7q_n"/></g>`,
		"fallback": "uix:chip-plus",
	});
}

export default Component;
