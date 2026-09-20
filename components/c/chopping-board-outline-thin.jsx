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

.jkajs8zlu {
  d: path("M13 8V4h4v4");
}

.jxalr7p_q {
  d: path("M3 8v12h14V8Z");
}
</style><g class="hntgybcog"><path class="jxalr7p_q"/><path class="jkajs8zlu"/></g>`,
		"fallback": "iconmind:chopping-board-outline-thin",
	});
}

export default Component;
