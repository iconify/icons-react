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
		"content": `<style>.ate26fxem {
  d: path("m16 12.5l-4 4l-4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxw9ivbpa {
  d: path("M19 20.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5Zm-7-13v9");
}
</style><g class="ulnmmdpxh"><path class="uxw9ivbpa"/><path class="ate26fxem"/></g>`,
		"fallback": "uix-sharp:arrow-down-square",
	});
}

export default Component;
