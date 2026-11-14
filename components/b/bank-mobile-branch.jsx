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
		"content": `<style>.ezqspacwm {
  d: path("M2.5 9.5h19v8h-19Zm4 0l5.5-5l5.5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqypmgb6q {
  d: path("M5 12h5.5v2.75H5Zm8.5 0H19v2.75h-5.5Zm-8.25 7.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ezqspacwm"/><path class="wqypmgb6q"/></g>`,
		"fallback": "uix-sharp:bank-mobile-branch",
	});
}

export default Component;
