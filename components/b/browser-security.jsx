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
		"content": `<style>.i209rv7rw {
  d: path("M10.25 13.25v-1a1.75 1.75 0 0 1 3.5 0v1m-5 0h6.5v5h-6.5Z");
}

.t13eeubsk {
  d: path("M2.5 3h19v18h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t13eeubsk"/><path class="i209rv7rw"/></g>`,
		"fallback": "uix-sharp:browser-security",
	});
}

export default Component;
