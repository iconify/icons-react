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
		"content": `<style>.fy_s8utaw {
  d: path("M4.5 4h15L21 20H3Z");
}

.m8pjzsbpf {
  d: path("M7.5 6.75h9v3h-9Zm0 6h.01m2.99 0h.01m2.99 0h.01m2.99 0h.01m-9.01 4h.01m2.99 0h.01m2.99 0h.01m2.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fy_s8utaw"/><path class="m8pjzsbpf"/></g>`,
		"fallback": "uix-sharp:desktop-calculator",
	});
}

export default Component;
