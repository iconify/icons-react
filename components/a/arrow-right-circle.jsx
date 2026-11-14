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
		"content": `<style>.g57jjt6uv {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m5 0h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpb3jfbzi {
  d: path("m12.5 8l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="g57jjt6uv"/><path class="xpb3jfbzi"/></g>`,
		"fallback": "uix:arrow-right-circle",
	});
}

export default Component;
