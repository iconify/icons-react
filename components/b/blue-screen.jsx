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
		"content": `<style>.ky_iq-b4p {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M8.5 8h.01m6.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vge4k2b1h {
  d: path("M8.5 13c1.5-2 5.5-2 7 0");
}
</style><g class="ulnmmdpxh"><path class="ky_iq-b4p"/><path class="vge4k2b1h"/></g>`,
		"fallback": "uix-sharp:blue-screen",
	});
}

export default Component;
