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
		"content": `<style>.at8in1p-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3h13.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H5.25A1.75 1.75 0 0 1 3.5 4.75A1.75 1.75 0 0 1 5.25 3m0 14.5h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75m.25-11v11m13-11v11m-10-3l2-2l1.75.5M14 8.75l2 2m0-2l-2 2");
}
</style><path class="at8in1p-b"/>`,
		"fallback": "uix:ancient-map",
	});
}

export default Component;
