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
		"content": `<style>.rky29dr0f {
  d: path("M10 6.25h4v6h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xc153x4nr {
  d: path("M2.5 3.5h19v17h-19Zm5 0v17m9-17v17");
}
</style><g class="ulnmmdpxh"><path class="xc153x4nr"/><path class="rky29dr0f"/></g>`,
		"fallback": "uix-sharp:board-card",
	});
}

export default Component;
