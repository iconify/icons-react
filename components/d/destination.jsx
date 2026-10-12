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
		"content": `<style>.m5wk70bjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.25V2.75m-3.25 18.5h6.5m-2.5-18.5H20q.75 0 .32.61l-2.14 3.03q-.43.61 0 1.22l2.14 3.03q.43.61-.32.61H8.75q-.75 0-.75-.75v-7q0-.75.75-.75");
}
</style><path class="m5wk70bjy"/>`,
		"fallback": "iconoven:destination",
	});
}

export default Component;
