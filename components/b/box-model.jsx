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

.wh4yx2daz {
  d: path("M11.25 9.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}

.x8l_a5w2a {
  d: path("M8.625 6h6.75A2.625 2.625 0 0 1 18 8.625v6.75A2.625 2.625 0 0 1 15.375 18h-6.75A2.625 2.625 0 0 1 6 15.375v-6.75A2.625 2.625 0 0 1 8.625 6");
}

.yqwllmqht {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5");
}
</style><g class="hntgybcog"><path class="yqwllmqht"/><path class="x8l_a5w2a"/><path class="wh4yx2daz"/></g>`,
		"fallback": "uix:box-model",
	});
}

export default Component;
