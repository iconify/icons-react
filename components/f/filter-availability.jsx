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
		"content": `<style>.cu4tpzh0g {
  d: path("M2.5 2.5h15V7h-15ZM4 7v9.5q0 1 1 1h7.586M16 11.928V7");
}

.s7forcpna {
  d: path("m7 12l2.25 2.25l.411-.462m1.594-1.794L13.25 9.75m.75 5h7.25l-2.75 3.5v3l-1.75-1v-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cu4tpzh0g"/><path class="s7forcpna"/></g>`,
		"fallback": "uix-sharp:filter-availability",
	});
}

export default Component;
