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
		"content": `<style>.fxr7wcrtn {
  d: path("M8.25 8.25h7.5a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-7.5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1m1.5 3.25h4.5m-4.5 3h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j24hz-q8l {
  d: path("m9.5 4.75l2.5-2l2.5 2");
}

.kxromsfjv {
  width: 16.5px;
  height: 16.5px;
  x: 3.75px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="j24hz-q8l"/><rect class="kxromsfjv"/><path class="fxr7wcrtn"/></g>`,
		"fallback": "iconoven:diploma-frame",
	});
}

export default Component;
