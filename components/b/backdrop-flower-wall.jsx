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
		"content": `<style>.nk30f8byu {
  d: path("M2.5 2.5h19v14h-19Zm3.5 14v5m12-5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl5hocbhe {
  d: path("M10.5 8a2 2 0 1 1 3 0a2 2 0 1 1 0 3a2 2 0 1 1-3 0a2 2 0 1 1 0-3ZM12 9.5h.01");
}
</style><g class="ulnmmdpxh"><path class="nk30f8byu"/><path class="xl5hocbhe"/></g>`,
		"fallback": "uix-sharp:backdrop-flower-wall",
	});
}

export default Component;
