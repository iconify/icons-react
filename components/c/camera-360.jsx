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

.qtx8rab0b {
  d: path("M5.5 9.5a6.5 2.25 0 1 0 13 0a6.5 2.25 0 1 0-13 0m-2.5 6q9 7.5 18 0");
}

.r7bsc7b6t {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.wy3lou_ac {
  d: path("M18.5 15.5H21V18");
}
</style><g class="hntgybcog"><path class="r7bsc7b6t"/><path class="qtx8rab0b"/><path class="wy3lou_ac"/></g>`,
		"fallback": "uix:camera-360",
	});
}

export default Component;
