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
		"content": `<style>.gsof1-0bp {
  d: path("M15 8.25h3.5v3H15ZM12.5 15q1.5-2 3 0t3 0");
}

.s5_fcfgbr {
  d: path("M2.5 5.5h19v13h-19Zm3.5 4h5.5m-5.5 5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5_fcfgbr"/><path class="gsof1-0bp"/></g>`,
		"fallback": "uix-sharp:benefits-payment-check",
	});
}

export default Component;
