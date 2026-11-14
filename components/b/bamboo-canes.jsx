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
		"content": `<style>.x3-heehdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5zA2.25 2.25 0 0 1 7 5.75v13.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 4.75 3.5m7.25-1za2.25 2.25 0 0 1 2.25 2.25v14.5A2.25 2.25 0 0 1 12 21.5a2.25 2.25 0 0 1-2.25-2.25V4.75A2.25 2.25 0 0 1 12 2.5m7.25 1za2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 17 19.25V5.75a2.25 2.25 0 0 1 2.25-2.25M2.5 7.5H7m2.75 9h4.5m2.75-9h4.5m-19 9H7M9.75 7h4.5M17 16.5h4.5M2.5 12h19");
}
</style><path class="x3-heehdc"/>`,
		"fallback": "uix:bamboo-canes",
	});
}

export default Component;
