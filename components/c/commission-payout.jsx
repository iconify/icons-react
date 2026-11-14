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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zk4w7393l {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5m-8-10.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm3 2l4-4m-4 .25h.01M14.5 9h.01");
}
</style><g class="ulnmmdpxh"><path class="ekf2s55jf"/><path class="zk4w7393l"/></g>`,
		"fallback": "uix-sharp:commission-payout",
	});
}

export default Component;
