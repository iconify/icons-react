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
		"content": `<style>.s5n91xbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 8H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 3M4 8v10.5q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T6 20.5h6.772M20 11.357V8M9 12h6m-.25 4.5h1.5l5.25-2.75v7.5l-5.25-2.75h-1.5Zm2 2.25l-.5 2.75");
}
</style><path class="s5n91xbet"/>`,
		"fallback": "uix:campaign-archive",
	});
}

export default Component;
