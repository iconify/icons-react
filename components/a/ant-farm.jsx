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
		"content": `<style>.pq_n7bc5t {
  d: path("M8.5 7.75c0 2.25.5 3.5 3 3.5H14c1.25 0 2 .75 2 3");
}

.qsihyuxvu {
  d: path("M3.5 7.5c2.5-1 4.5 1 7 0s5 .75 10 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2wnhd38c {
  d: path("M3.5 3h17v14h-17ZM7 17l-1 4m11-4l1 4");
}
</style><g class="ulnmmdpxh"><path class="v2wnhd38c"/><path class="qsihyuxvu"/><path class="pq_n7bc5t"/></g>`,
		"fallback": "uix-sharp:ant-farm",
	});
}

export default Component;
