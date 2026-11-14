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
		"content": `<style>.lhwv8jxtv {
  d: path("M11.6 21.5H4v-19h16V12m0 9.5h0h-.6m-.4 0h-.6");
}

.s_4h7n_3a {
  d: path("M7 5h10v6H7Zm-.5 8.75h9m-8.75 3.5h.01m2.49 0h.01m2.49 0h.01m9.46-.847a2 2 0 1 1-1.623-1.623M15 21l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lhwv8jxtv"/><path class="s_4h7n_3a"/></g>`,
		"fallback": "uix-sharp:atm-out-of-service",
	});
}

export default Component;
