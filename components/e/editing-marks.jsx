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
		"content": `<style>.ojydkkbir {
  d: path("m7 18.75l2.5-2.5l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwa7161at {
  d: path("M3.5 2.5h14v19h-14ZM7 8h14M6.5 13.5h8");
}
</style><g class="ulnmmdpxh"><path class="zwa7161at"/><path class="ojydkkbir"/></g>`,
		"fallback": "uix-sharp:editing-marks",
	});
}

export default Component;
