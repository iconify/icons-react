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
		"content": `<style>.dyiy7hbmg {
  d: path("M9 19.5v-5h4m3 1a3.5 3.5 0 1 0 4 0m-2-1.25v3.25");
}

.sou16vbyo {
  d: path("M11.772 19.5H2.5v-9L11 3l8.5 7.5v.928");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sou16vbyo"/><path class="dyiy7hbmg"/></g>`,
		"fallback": "uix-sharp:all-off",
	});
}

export default Component;
