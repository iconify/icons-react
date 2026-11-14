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
		"content": `<style>.qfv0p-pmo {
  d: path("m8.25 15l1.25 1.25l2-2.25m2.5 1h2.5m-8.25 3.5l1.25 1.25l2-2.25");
}

.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="qfv0p-pmo"/></g>`,
		"fallback": "uix-sharp:attendance-calendar",
	});
}

export default Component;
