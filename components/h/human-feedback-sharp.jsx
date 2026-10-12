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
		"content": `<style>.jt32-ub8m {
  d: path("M15.75 6.25L17 7.5l2.25-2.25");
}

.q2vj16brv {
  d: path("M2.75 20.75a5.25 5.25 0 0 1 10.5 0m2.5-18h5.5v7h-3l-2.5 2v-2h-2v-7z");
}

.v9upi9b5t {
  cx: 8px;
  cy: 8.75px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="v9upi9b5t"/><path class="q2vj16brv"/><path class="jt32-ub8m"/></g>`,
		"fallback": "iconoven:human-feedback-sharp",
	});
}

export default Component;
