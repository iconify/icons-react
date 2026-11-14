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
		"content": `<style>.gdwrfvb-e {
  d: path("M9 8.5h6v5H9Zm3 9h.01");
}

.qinlwwb_f {
  d: path("M7 5.5h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1Zm2.5 0a2.5 2.5 0 0 1 5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qinlwwb_f"/><path class="gdwrfvb-e"/></g>`,
		"fallback": "uix-sharp:gas-monitor-personal",
	});
}

export default Component;
