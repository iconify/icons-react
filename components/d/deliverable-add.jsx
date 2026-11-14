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
		"content": `<style>.fspf8_nmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h13A2.5 2.5 0 0 1 21 6a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 6a2.5 2.5 0 0 1 2.5-2.5m-1 5v10q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028t.196.01h7.272m5.728-7.843V8.5M18 15v6m-3-3h6");
}
</style><path class="fspf8_nmf"/>`,
		"fallback": "uix:deliverable-add",
	});
}

export default Component;
