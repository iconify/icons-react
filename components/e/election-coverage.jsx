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
		"content": `<style>.rkojmkb-x {
  d: path("M8.5 10.5L11 13l4.5-4.5");
}

.u2m3lpb8w {
  d: path("M2.5 3.5h19v14h-19Zm6 17.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u2m3lpb8w"/><path class="rkojmkb-x"/></g>`,
		"fallback": "uix-sharp:election-coverage",
	});
}

export default Component;
