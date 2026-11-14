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
		"content": `<style>.m9ahk8bzw {
  d: path("M4.5 6h15v15.5h-15Z");
}

.qtsw_qpvo {
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8 18.5L12 9l4 9.5M9.5 15h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m9ahk8bzw"/><path class="qtsw_qpvo"/></g>`,
		"fallback": "uix-sharp:alphabet-chart",
	});
}

export default Component;
