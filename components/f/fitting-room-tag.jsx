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
		"content": `<style>.p5b2tsf9r {
  d: path("M12 8.75V5c0-1.5 1.25-2.5 2.5-2.5s2.25 1 2 2.25m-6.75 8.5C10 12.5 10.75 12 12 12s2.25.6 2.25 1.75c0 1-.75 1.5-2 1.5c1.25 0 2.25.65 2.25 2c0 1-1 1.75-2.5 1.75c-1.25 0-2-.5-2.5-1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_oprrnnj {
  d: path("M6 7h12v14.5H6Z");
}

.zh6qozwub {
  d: path("M11 9.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="w_oprrnnj"/><path class="zh6qozwub"/><path class="p5b2tsf9r"/></g>`,
		"fallback": "uix-sharp:fitting-room-tag",
	});
}

export default Component;
