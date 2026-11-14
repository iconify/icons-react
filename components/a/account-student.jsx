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
		"content": `<style>.oi2sdyb_f {
  d: path("m12 5l9 5l-9 5l-9-5Z");
}

.quk2zcvog {
  d: path("M7 12.5V17c2.5 2 7.5 2 10 0v-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oi2sdyb_f"/><path class="quk2zcvog"/></g>`,
		"fallback": "uix-sharp:account-student",
	});
}

export default Component;
