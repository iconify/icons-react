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
		"content": `<style>.k3bas5bgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5zA1.25 1.25 0 0 1 5.5 5.75v13A1.25 1.25 0 0 1 4.25 20A1.25 1.25 0 0 1 3 18.75v-13A1.25 1.25 0 0 1 4.25 4.5m6 0za1.25 1.25 0 0 1 1.25 1.25v13A1.25 1.25 0 0 1 10.25 20A1.25 1.25 0 0 1 9 18.75v-13a1.25 1.25 0 0 1 1.25-1.25m6 0za1.25 1.25 0 0 1 1.25 1.25v13A1.25 1.25 0 0 1 16.25 20A1.25 1.25 0 0 1 15 18.75v-13a1.25 1.25 0 0 1 1.25-1.25M5.5 9H9m-3.5 6.5H9M11.5 9H15m-3.5 6.5H15m5.5-1V18m0 3h.01");
}
</style><path class="k3bas5bgt"/>`,
		"fallback": "uix:boundary-dispute",
	});
}

export default Component;
