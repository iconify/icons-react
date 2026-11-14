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
		"content": `<style>.i-e6e76co {
  d: path("M7 19v-8.5h10V19m-6.75-8.5V19m3.5-8.5V19");
}

.s6kgi-utc {
  d: path("M2.5 4.5h19v3h-19Zm1.5 3V19h16V7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6kgi-utc"/><path class="i-e6e76co"/></g>`,
		"fallback": "uix-sharp:convention-center",
	});
}

export default Component;
