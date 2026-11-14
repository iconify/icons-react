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
		"content": `<style>.il6glvw9t {
  d: path("M3 20.5V12a9 9 0 0 1 18 0v8.5");
}

.qk_ynqbms {
  d: path("m6.5 20l3.5-6.5l4 4l3-7m-7 3h.01m3.99 4h.01m2.99-7h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="il6glvw9t"/><path class="qk_ynqbms"/></g>`,
		"fallback": "uix-sharp:cave-survey",
	});
}

export default Component;
