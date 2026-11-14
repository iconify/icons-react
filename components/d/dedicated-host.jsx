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
		"content": `<style>.r975pxb8z {
  d: path("M18 21.5c-2-2-3-3.25-3-4.5a3 3 0 0 1 6 0c0 1.25-1 2.5-3 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlvuafbmb {
  d: path("M12.4 15.5H2.5v-12h19v8.9m-15-2.9h.01m3.49 0h7.5");
}
</style><g class="ulnmmdpxh"><path class="wlvuafbmb"/><path class="r975pxb8z"/></g>`,
		"fallback": "uix-sharp:dedicated-host",
	});
}

export default Component;
