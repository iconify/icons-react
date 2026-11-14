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

.tqf_twjws {
  d: path("M8 4.5zA1.5 1.5 0 0 1 9.5 6v2A1.5 1.5 0 0 1 8 9.5A1.5 1.5 0 0 1 6.5 8V6A1.5 1.5 0 0 1 8 4.5m6.5 9h5m-2.5 3s-2 2.25-2 3.5a2 2 0 0 0 4 0c0-1.25-2-3.5-2-3.5");
}

.uz8a73byf {
  d: path("M2.5 7H12a5 5 0 0 1 5 5v1.5");
}
</style><g class="hntgybcog"><path class="uz8a73byf"/><path class="tqf_twjws"/></g>`,
		"fallback": "uix:fix-leak",
	});
}

export default Component;
