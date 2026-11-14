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
		"content": `<style>.i1phupool {
  d: path("M17.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-6.5 0h-4m-3.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wop0e20di {
  d: path("M5 3.5h14L13.25 12L19 20.5H5l5.75-8.5Zm8.25 8.5h4");
}
</style><g class="ulnmmdpxh"><path class="wop0e20di"/><path class="i1phupool"/></g>`,
		"fallback": "uix-sharp:damaru-drum",
	});
}

export default Component;
