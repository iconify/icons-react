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
		"content": `<style>.m01dhl5xy {
  d: path("M8.5 2.5V19h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvf17-bii {
  d: path("M5.5 5h10v16.5");
}
</style><g class="ulnmmdpxh"><path class="m01dhl5xy"/><path class="zvf17-bii"/></g>`,
		"fallback": "uix-sharp:crop-portrait",
	});
}

export default Component;
