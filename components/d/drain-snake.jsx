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
		"content": `<style>.d_bfxlcha {
  d: path("M10 17q0 4 4 4h3.5q2.5 0 3-2.5M7.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.dxv21zbxm {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm14 0h4V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxv21zbxm"/><path class="d_bfxlcha"/></g>`,
		"fallback": "uix-sharp:drain-snake",
	});
}

export default Component;
