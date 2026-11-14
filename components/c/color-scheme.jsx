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

.ia_atfqnp {
  d: path("M18.496 12.225za2.75 2.75 0 0 1-1.643 3.524l-8.928 3.25a2.75 2.75 0 0 1-3.524-1.644a2.75 2.75 0 0 1 1.643-3.525l8.927-3.249a2.75 2.75 0 0 1 3.525 1.644M6.75 16.5h.01");
}

.otn5p_x9g {
  d: path("M13.92 6.261za2.75 2.75 0 0 1 .675 3.83l-5.449 7.782a2.75 2.75 0 0 1-3.83.675a2.75 2.75 0 0 1-.675-3.83l5.449-7.782a2.75 2.75 0 0 1 3.83-.675");
}

.wjnv0bc3r {
  d: path("M6.75 4zA2.75 2.75 0 0 1 9.5 6.75v9.5A2.75 2.75 0 0 1 6.75 19A2.75 2.75 0 0 1 4 16.25v-9.5A2.75 2.75 0 0 1 6.75 4");
}
</style><g class="hntgybcog"><path class="wjnv0bc3r"/><path class="otn5p_x9g"/><path class="ia_atfqnp"/></g>`,
		"fallback": "uix:color-scheme",
	});
}

export default Component;
