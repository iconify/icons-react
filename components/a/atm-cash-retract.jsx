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
		"content": `<style>.acqg7-bao {
  d: path("M2.5 4h19v4.5h-19Zm2 4.5v10q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028t.196.01h8.072m4.928-8.343V8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9ds8fjld {
  d: path("M8.25 13.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="acqg7-bao"/><path class="z9ds8fjld"/></g>`,
		"fallback": "uix-sharp:atm-cash-retract",
	});
}

export default Component;
