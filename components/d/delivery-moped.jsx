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
		"content": `<style>.f0m_0acun {
  d: path("M2.5 17.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.gkvybgbxk {
  d: path("M5.5 17.5H12L14 8h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u8gaezh8r {
  d: path("M7.75 6h3.5A1.75 1.75 0 0 1 13 7.75v1.5A1.75 1.75 0 0 1 11.25 11h-3.5A1.75 1.75 0 0 1 6 9.25v-1.5A1.75 1.75 0 0 1 7.75 6");
}
</style><g class="hntgybcog"><path class="f0m_0acun"/><path class="gkvybgbxk"/><path class="u8gaezh8r"/></g>`,
		"fallback": "uix:delivery-moped",
	});
}

export default Component;
