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
		"content": `<style>.cy7jpy12m {
  d: path("m9.75 11l1-1.75l1.25 1.5l1.25-1.5l1 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgdpwc66h {
  d: path("m5 11l.75-7.5L10 7q2-.5 4 0l4.25-3.5L19 11c0 5.75-3.25 9.5-7 9.5S5 16.75 5 11Zm.5 3.75l3 1m10-1l-3 1M9.25 13.5h.01m5.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wgdpwc66h"/><path class="cy7jpy12m"/></g>`,
		"fallback": "uix-sharp:cat-breed-tabby",
	});
}

export default Component;
