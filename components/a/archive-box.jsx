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
		"content": `<style>.cxj7akb3g {
  d: path("M2.5 4h19v4.5h-19ZM4 8.5v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2rdmdr1x {
  d: path("M9.5 11.5h5V14h-5Z");
}
</style><g class="ulnmmdpxh"><path class="cxj7akb3g"/><path class="x2rdmdr1x"/></g>`,
		"fallback": "uix-sharp:archive-box",
	});
}

export default Component;
