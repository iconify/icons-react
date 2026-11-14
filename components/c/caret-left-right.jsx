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
		"content": `<style>.q_5zkxb0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.147 13.145l-2.678 2.266A1.5 1.5 0 0 1 14 14.266V9.734a1.5 1.5 0 0 1 2.469-1.145l2.678 2.266a1.5 1.5 0 0 1 0 2.29m-14.294 0l2.678 2.266A1.5 1.5 0 0 0 10 14.266V9.734a1.5 1.5 0 0 0-2.469-1.145l-2.678 2.266a1.5 1.5 0 0 0 0 2.29");
}
</style><path class="q_5zkxb0i"/>`,
		"fallback": "uix:caret-left-right",
	});
}

export default Component;
