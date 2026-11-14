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
		"content": `<style>.c2u11u86f {
  d: path("M5.5 6a6.5 2.5 0 0 0 13 0M12 11.25c1.25 1.75 2.5 3 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.5 1.25-2.75 2.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.txoh7db5n {
  d: path("M5.5 6a6.5 2.5 0 0 1 13 0v12.5a6.5 2.5 0 0 1-13 0Z");
}
</style><g class="hntgybcog"><path class="txoh7db5n"/><path class="c2u11u86f"/></g>`,
		"fallback": "uix:hydrogen-electrolyser",
	});
}

export default Component;
