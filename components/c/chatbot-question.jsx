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
		"content": `<style>.piazj3bno {
  d: path("M15.75 15a2.25 2.25 0 1 1 3 2.25q-.75.375-.75 1.5m0 2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zeunvmbyj {
  d: path("M15.2 18H2.5V6.5H17v3.7M9.75 3v3.5m-3 5.25h.01m5.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="zeunvmbyj"/><path class="piazj3bno"/></g>`,
		"fallback": "uix-sharp:chatbot-question",
	});
}

export default Component;
