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
		"content": `<style>.qfm0f643r {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zhm5t29_o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="zhm5t29_o"/><path class="qfm0f643r"/></g>`,
		"fallback": "iconmind:experiment-duotone-bold",
	});
}

export default Component;
