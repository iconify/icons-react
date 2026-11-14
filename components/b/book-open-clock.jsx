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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.d0jfembef {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.uio1r1mlc {
  d: path("M21 12.767V4.5q-6-.75-9 1.5q-3-2.25-9-1.5v14q6-.75 9 1.5q.12-.09.244-.175M12 6v11.9m0 .2V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uio1r1mlc"/><path class="d0jfembef"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:book-open-clock",
	});
}

export default Component;
