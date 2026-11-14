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
		"content": `<style>.h0of5-b6k {
  d: path("M15.75 13a4 4 0 0 1 .25 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uneo4lcaa {
  d: path("M12 3s-7.25 7.5-7.25 11.25a7.25 7.25 0 0 0 14.5 0C19.25 10.5 12 3 12 3");
}
</style><g class="hntgybcog"><path class="uneo4lcaa"/><path class="h0of5-b6k"/></g>`,
		"fallback": "uix:fat-macro",
	});
}

export default Component;
