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
		"content": `<style>.kyd26-b5q {
  d: path("M7.5 16.5V14a4.5 3.5 0 0 1 9 0v2.5Z");
}

.snzl1k4vt {
  d: path("M2.5 4.5h19V20h-19Zm0 3h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="snzl1k4vt"/><path class="kyd26-b5q"/></g>`,
		"fallback": "uix-sharp:bread-maker",
	});
}

export default Component;
