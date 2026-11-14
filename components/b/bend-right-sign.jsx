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

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.mc7c4obtw {
  d: path("M11 16.5v-4a2.5 2.5 0 0 1 2.5-2.5h2");
}

.t4d2iabfw {
  d: path("m13.75 8l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="mc7c4obtw"/><path class="t4d2iabfw"/></g>`,
		"fallback": "uix:bend-right-sign",
	});
}

export default Component;
