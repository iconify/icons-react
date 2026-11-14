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

.ik9xqux_v {
  d: path("M12 3v8l-6 6v4m6-10l6 6v4");
}

.yil3u-b5j {
  d: path("M8.5 6.5L12 3l3.5 3.5");
}
</style><g class="hntgybcog"><path class="ik9xqux_v"/><path class="yil3u-b5j"/></g>`,
		"fallback": "uix:arrow-merge",
	});
}

export default Component;
