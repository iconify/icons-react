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
		"content": `<style>.b5hxaubui {
  d: path("M8.5 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvpx6lcjt {
  d: path("m3.5 9.5l1.5 12h10l1.5-12M4 13h12m1.71-9.937l1.812-.845a1.5 1.5 0 0 1 1.994.725a1.5 1.5 0 0 1-.726 1.994l-1.812.845a1.5 1.5 0 0 1-1.994-.725a1.5 1.5 0 0 1 .726-1.994");
}
</style><g class="hntgybcog"><path class="qvpx6lcjt"/><path class="b5hxaubui"/></g>`,
		"fallback": "uix:effervescent-tablet",
	});
}

export default Component;
