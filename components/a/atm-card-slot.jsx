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
		"content": `<style>.es0ngpbos {
  d: path("M8.75 11.5h3.5v3h-3.5Z");
}

.hn94xccbv {
  d: path("M2.5 4h19v4.5h-19ZM6 8.5v10A2.5 2.5 0 0 0 8.5 21h7a2.5 2.5 0 0 0 2.5-2.5v-10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn94xccbv"/><path class="es0ngpbos"/></g>`,
		"fallback": "uix-sharp:atm-card-slot",
	});
}

export default Component;
