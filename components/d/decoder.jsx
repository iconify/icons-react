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
		"content": `<style>.f-l927b5x {
  d: path("M5 9.5L7.5 12L5 14.5M15.75 7h5.75m-5.75 5h5.75m-5.75 5h5.75");
}

.t-a_rjgai {
  d: path("M7.5 7h5.25v10H7.5Zm-5 5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-a_rjgai"/><path class="f-l927b5x"/></g>`,
		"fallback": "uix-sharp:decoder",
	});
}

export default Component;
