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
		"content": `<style>.jianh4bcb {
  d: path("M2.5 15.5h19v-4l-3-3.5h-3v7.5");
}

.noe97lr0b {
  d: path("M3.25 10.75a5 3.5-20 0 1 9.5-3.5a5 3.5-20 0 1-9.5 3.5ZM5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jianh4bcb"/><path class="noe97lr0b"/></g>`,
		"fallback": "uix-sharp:concrete-mixer-truck",
	});
}

export default Component;
