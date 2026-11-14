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
		"content": `<style>.t4_9k-bwm {
  d: path("M19 3H5a2 3 0 0 0 0 6h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo6b-aboc {
  d: path("M17 6a2 3 0 1 0 4 0a2 3 0 1 0-4 0ZM5 9v10.5l1.75 2l1.75-2l1.75 2l1.75-2l1.75 2l1.75-2V9M8 13.5h4.5");
}
</style><g class="ulnmmdpxh"><path class="t4_9k-bwm"/><path class="vo6b-aboc"/></g>`,
		"fallback": "uix-sharp:fax-paper",
	});
}

export default Component;
