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
		"content": `<style>.hz-q-nlcx {
  d: path("M8.5 11.75q2-1.5 3.75 0t3.75 0M7.5 15q2.25-1.5 4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuq-jrx4t {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Z");
}
</style><g class="ulnmmdpxh"><path class="yuq-jrx4t"/><path class="hz-q-nlcx"/></g>`,
		"fallback": "uix-sharp:air-quality-moderate",
	});
}

export default Component;
