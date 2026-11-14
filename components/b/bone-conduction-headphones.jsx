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

.jui0eguyk {
  d: path("M5.5 17.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.y-0_sxbwz {
  d: path("M6.25 16C3 12.25 4 3.75 12 3.75s9 8.5 5.75 12.25");
}
</style><g class="hntgybcog"><path class="y-0_sxbwz"/><path class="jui0eguyk"/></g>`,
		"fallback": "uix:bone-conduction-headphones",
	});
}

export default Component;
