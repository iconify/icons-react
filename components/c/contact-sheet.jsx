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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tll24kbhd {
  d: path("M7.5 5h3v3h-3Zm6 0h3v3h-3Zm-6 5.5h3v3h-3Zm6 0h3v3h-3Zm-6 5.5h3v3h-3Zm6 0h3v3h-3Z");
}

.uh1ab-bsl {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="uh1ab-bsl"/><path class="tll24kbhd"/></g>`,
		"fallback": "uix:contact-sheet",
	});
}

export default Component;
