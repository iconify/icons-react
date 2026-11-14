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
		"content": `<style>.f_tzcp8uc {
  d: path("M5.5 14.5c2-1.25 4 1.25 6.5 0s4.5 1.25 6.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj493vd8j {
  d: path("M2.5 10h19l-2 9h-15Z");
}
</style><g class="ulnmmdpxh"><path class="yj493vd8j"/><path class="f_tzcp8uc"/></g>`,
		"fallback": "uix-sharp:developing-tray",
	});
}

export default Component;
