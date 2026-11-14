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
		"content": `<style>.b6fis-_bt {
  d: path("M3 5.25h18v13.5H3Z");
}

.dtdcglbfe {
  d: path("M6 10.5V8h2.5m7 0H18v2.5m0 3V16h-2.5m-7 0H6v-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b6fis-_bt"/><path class="dtdcglbfe"/></g>`,
		"fallback": "uix-sharp:aspect-4-3",
	});
}

export default Component;
