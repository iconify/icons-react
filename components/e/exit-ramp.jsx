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
		"content": `<style>.fwmidkbpv {
  d: path("M14.5 15h7v4h-7Zm3.5 4v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwg0lprpc {
  d: path("M2.5 2.5v19m6 0v-5c0-3.5 2.5-4.5 6-4.5h7m-13-9.5v3c0 2 2.5 3 6 3h7");
}
</style><g class="ulnmmdpxh"><path class="wwg0lprpc"/><path class="fwmidkbpv"/></g>`,
		"fallback": "uix-sharp:exit-ramp",
	});
}

export default Component;
