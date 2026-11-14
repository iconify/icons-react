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
		"content": `<style>.ie-dbk8ct {
  d: path("M7 17.5H5A2.5 2.5 0 0 1 2.5 15v-4.5A2.5 2.5 0 0 1 5 8h14a2.5 2.5 0 0 1 2.5 2.5V15a2.5 2.5 0 0 1-2.5 2.5h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1lx-gbgh {
  d: path("M7 14h10v7.5H7Zm0-6V3.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V8M9.5 18h5");
}
</style><g class="ulnmmdpxh"><path class="ie-dbk8ct"/><path class="y1lx-gbgh"/></g>`,
		"fallback": "uix-sharp:debug-print",
	});
}

export default Component;
