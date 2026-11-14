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
		"content": `<style>.j44ecpb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.75a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0M3.75 11a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0m10.5 0a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0m-7.5 3.5L12 21m5.25-6.5L12 21m0-11.75V21");
}
</style><path class="j44ecpb1e"/>`,
		"fallback": "uix:balloons-bunch",
	});
}

export default Component;
