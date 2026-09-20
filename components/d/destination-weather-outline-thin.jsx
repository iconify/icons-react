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

.j330vxbun {
  d: path("M4 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.tij86w9ve {
  d: path("M9 20a4 4 0 0 1 0 -8 5 5 0 0 1 9 0 4 4 0 0 1 0 8Z");
}
</style><g class="hntgybcog"><path class="j330vxbun"/><path class="tij86w9ve"/></g>`,
		"fallback": "iconmind:destination-weather-outline-thin",
	});
}

export default Component;
