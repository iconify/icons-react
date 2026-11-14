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

.iumsfqbzl {
  d: path("M12 2.25C15.75 7 19.25 10.5 19.25 14.5s-3.25 7-7.25 7s-7.25-3-7.25-7S8.25 7 12 2.25");
}

.v14dxl4qj {
  fill: currentColor;
  d: path("M5.25 16.5h13.5c-.5 3-3.25 5-6.75 5s-6.25-2-6.75-5");
}
</style><g class="hntgybcog"><path class="iumsfqbzl"/><path class="v14dxl4qj"/></g>`,
		"fallback": "uix:anaemia",
	});
}

export default Component;
