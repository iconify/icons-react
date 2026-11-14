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
		"content": `<style>.eqey0fxvh {
  d: path("M6.5 13.5L9 21h6l2.5-7.5m-5.5 1V21");
}

.gigyi6bxl {
  d: path("M4 2.5h16v9H4Z");
}

.q2y-qcc-l {
  d: path("M6 13a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0Zm3-7.5h6V9H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gigyi6bxl"/><path class="q2y-qcc-l"/><path class="eqey0fxvh"/></g>`,
		"fallback": "uix-sharp:basketball-court",
	});
}

export default Component;
