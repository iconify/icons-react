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
		"content": `<style>.dil1r7baf {
  d: path("M11.5 6L8 12h4l-2.5 5m8.5-2.5V18m0 3h.01");
}

.l07xlrb8y {
  d: path("M15.2 21H4.5V2.5H16v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l07xlrb8y"/><path class="dil1r7baf"/></g>`,
		"fallback": "uix-sharp:device-charging-error",
	});
}

export default Component;
