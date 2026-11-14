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
		"content": `<style>.r1nm1t1oi {
  d: path("M16 21.5h4a2 2 0 0 0 0-4a3 3 0 0 0-5.5.5a1.75 1.75 0 0 0 1.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5kd5ud6m {
  d: path("M10.6 20.5H3.5v-17h17v10.4M3.5 9h17M12 3.5V9");
}
</style><g class="ulnmmdpxh"><path class="w5kd5ud6m"/><path class="r1nm1t1oi"/></g>`,
		"fallback": "uix-sharp:carbon-footprint-shipping",
	});
}

export default Component;
