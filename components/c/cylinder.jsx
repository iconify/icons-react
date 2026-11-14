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

.jaee2j7fj {
  d: path("M4.5 6a7.5 3 0 1 0 15 0a7.5 3 0 1 0-15 0");
}

.su1urnbta {
  d: path("M4.5 6v12a7.5 3 0 0 0 15 0V6");
}
</style><g class="hntgybcog"><path class="jaee2j7fj"/><path class="su1urnbta"/></g>`,
		"fallback": "uix:cylinder",
	});
}

export default Component;
