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
		"content": `<style>.dx_iwk-vr {
  d: path("M12.2 17H2.5V4h19v10M6 8h7m-7 3.5h4.5");
}

.f94_x4biu {
  d: path("M14.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm.25 9h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dx_iwk-vr"/><path class="f94_x4biu"/></g>`,
		"fallback": "uix-sharp:deposit-cd",
	});
}

export default Component;
