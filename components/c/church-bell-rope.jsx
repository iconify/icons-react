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
		"content": `<style>.gmg06pbkt {
  d: path("M9.5 5V2.5H18v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x35nvebfa {
  d: path("M4 14.5L5.5 13V9a4 4 0 0 1 8 0v4l1.5 1.5Z");
}

.z8hu4x_9r {
  d: path("M15.75 18.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-6.25-1.5h.01");
}
</style><g class="hntgybcog"><path class="x35nvebfa"/><path class="gmg06pbkt"/><path class="z8hu4x_9r"/></g>`,
		"fallback": "uix:church-bell-rope",
	});
}

export default Component;
