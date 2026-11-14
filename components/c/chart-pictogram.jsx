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
		"content": `<style>.ih-11-b1l {
  fill: currentColor;
  d: path("M3.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 19v-5.5a2.5 2.5 0 0 1 5 0V19Zm7.75-12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM9.5 19v-5.5a2.5 2.5 0 0 1 5 0V19Z");
}

.mcy7tn5wc {
  d: path("M17.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.75 12v-5.5a2.5 2.5 0 0 1 5 0V19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ih-11-b1l"/><path class="mcy7tn5wc"/></g>`,
		"fallback": "uix-sharp:chart-pictogram",
	});
}

export default Component;
