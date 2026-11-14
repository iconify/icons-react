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
		"content": `<style>.yhwptkbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3h14.5A1.75 1.75 0 0 1 20 4.75v2a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.75v-2A1.75 1.75 0 0 1 3.75 3M3.5 8.5V17q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T5.5 19h7.672m5.328-5.443V8.5M8 5.75h6m1.5 9.75l5 5m0-5l-5 5");
}
</style><path class="yhwptkbje"/>`,
		"fallback": "uix:ballot-box-x",
	});
}

export default Component;
