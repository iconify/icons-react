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
		"content": `<style>.fsnfx25hs {
  d: path("M10 21.5v-3a2 2 0 0 1 4 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pp7umkmgo {
  d: path("M3.5 21.5V15L9 12.5V10l3-4l3 4v2.5l5.5 2.5v6.5ZM12 2v4m-2-2.25h4");
}
</style><g class="hntgybcog"><path class="pp7umkmgo"/><path class="fsnfx25hs"/></g>`,
		"fallback": "uix:chapel",
	});
}

export default Component;
