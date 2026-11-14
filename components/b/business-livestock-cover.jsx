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

.tfbr82yah {
  d: path("M9 17.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0");
}

.yt-s_ymok {
  d: path("M12 9za5 5 0 0 1 5 5v1.5a5 5 0 0 1-5 5a5 5 0 0 1-5-5V14a5 5 0 0 1 5-5m-4.5 1.5c-2.5 0-4-2-4-4.5m13 4.5c2.5 0 4-2 4-4.5M10 13.5h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="yt-s_ymok"/><path class="tfbr82yah"/></g>`,
		"fallback": "uix:business-livestock-cover",
	});
}

export default Component;
