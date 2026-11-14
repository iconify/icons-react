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
		"content": `<style>.bsoyd5b1r {
  d: path("M5.5 5h12L21 8.5V11H5.5a3 3 0 0 1 0-6m0 8.75H21v6H5.5a3 3 0 0 1 0-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2j_68bqp {
  d: path("M17.5 5v3.5H21M14 5v6m0 2.75v6");
}
</style><g class="hntgybcog"><path class="bsoyd5b1r"/><path class="k2j_68bqp"/></g>`,
		"fallback": "uix:camp-blanket",
	});
}

export default Component;
