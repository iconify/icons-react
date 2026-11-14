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
		"content": `<style>.o4c588h0r {
  d: path("M3.5 3v17.5h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-xu7rltv {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m.625 10.685a3.25 3.25 0 1 1-4.44 1.19");
}
</style><g class="ulnmmdpxh"><path class="o4c588h0r"/><path class="x-xu7rltv"/></g>`,
		"fallback": "uix-sharp:chart-loading",
	});
}

export default Component;
