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
		"content": `<style>.ae_vmwbwm {
  d: path("M5.5 4.5H14a3 3 0 0 1 3 3V19H5.5a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykh9yh77u {
  d: path("M6.75 11.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM17 15.5h4.5V19H17");
}
</style><g class="ulnmmdpxh"><path class="ae_vmwbwm"/><path class="ykh9yh77u"/></g>`,
		"fallback": "uix-sharp:garden-measuring-tape",
	});
}

export default Component;
