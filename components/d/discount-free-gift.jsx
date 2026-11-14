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
		"content": `<style>.p72-m8ufc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 12.5H2.5v-4h13v3.7m-12 .3V19q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T5.5 21h7q.479 0 .906-.217m1.094-5.626V12.5M9 8.5c-3.5 0-4.5-5-2-5c1.5 0 2 2.5 2 5m0 0c3.5 0 4.5-5 2-5c-1.5 0-2 2.5-2 5m0 0V21m9-6v6m-3-3h6");
}
</style><path class="p72-m8ufc"/>`,
		"fallback": "uix-sharp:discount-free-gift",
	});
}

export default Component;
