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
		"content": `<style>.f1x9odx_f {
  d: path("M6.5 7.5c1.5.5 2 2 1 3.5m-1 5.5c1.25-.75 2-2 1.25-3m9.75-6c-1.5.5-2 2-1 3.5m1 5.5c-1.25-.75-2-2-1.25-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4z5_hbov {
  d: path("M10.75 2.75C6 2.75 3.5 6.75 3.5 12s2.5 9.25 7.25 9.25Zm2.5 0c4.75 0 7.25 4 7.25 9.25s-2.5 9.25-7.25 9.25Z");
}
</style><g class="ulnmmdpxh"><path class="x4z5_hbov"/><path class="f1x9odx_f"/></g>`,
		"fallback": "uix-sharp:brain-hemispheres",
	});
}

export default Component;
