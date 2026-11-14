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

.luhy9jbun {
  d: path("M15.5 3.5h4v4");
}

.tj-f_1beu {
  d: path("M5.5 20.5V17m5.5 3.5V14m5.5 6.5V11m-13 1L9 7l3.5 2.5l7-6");
}
</style><g class="hntgybcog"><path class="tj-f_1beu"/><path class="luhy9jbun"/></g>`,
		"fallback": "uix:growth-chart",
	});
}

export default Component;
