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
		"content": `<style>.gstcfgbtg {
  d: path("M11.6 21.5H3.5v-19h15v10.2");
}

.m6yg0xv7o {
  d: path("M7.5 9a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm.5 6.5h5.4M15 21l5.25-5.25m-4-.25h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gstcfgbtg"/><path class="m6yg0xv7o"/></g>`,
		"fallback": "uix-sharp:exit-stamp",
	});
}

export default Component;
