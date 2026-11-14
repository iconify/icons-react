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
		"content": `<style>.m_opdwbud {
  d: path("M7 2.5h8L19.5 7v12a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.m-24hcwek {
  d: path("M15 2.5V5a2 2 0 0 0 2 2h2.5m-11-.5h-1v4h1m2.75-4h1v4h-1M7.5 14h9m-9 3.5H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m_opdwbud"/><path class="m-24hcwek"/></g>`,
		"fallback": "uix-sharp:ini-file",
	});
}

export default Component;
