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
		"content": `<style>.ezhshdb4i {
  d: path("m12 7l3.25 1.75V13L12 14.75L8.75 13V8.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwzp73xdl {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5");
}

.vcy8uoxzr {
  d: path("M8.75 8.75L12 10.5l3.25-1.75M12 10.5v4.25m-1.5 3.75h3");
}
</style><g class="hntgybcog"><path class="hwzp73xdl"/><path class="ezhshdb4i"/><path class="vcy8uoxzr"/></g>`,
		"fallback": "uix:courier-app",
	});
}

export default Component;
