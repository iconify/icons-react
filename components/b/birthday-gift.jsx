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
		"content": `<style>.ab6djpbxb {
  d: path("M3 11h11.5v10H3Zm5.75 0v10m0-10C7.5 8.5 5 7.5 5 9.25c0 1 1.75 1.75 3.75 1.75m0 0C10 8.5 12.5 7.5 12.5 9.25c0 1-1.75 1.75-3.75 1.75m6.75-4.5a2.75 3.5 0 1 0 5.5 0a2.75 3.5 0 1 0-5.5 0Z");
}

.qkfw_hbdn {
  d: path("M18.25 10v2l-.75 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ab6djpbxb"/><path class="qkfw_hbdn"/></g>`,
		"fallback": "uix-sharp:birthday-gift",
	});
}

export default Component;
