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
		"content": `<style>.zshd-w74t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.298 15.648C6.898 14.323 2.942 9.802 2.5 4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2.5H7l1.5 3.75l-1.75 1.5c.75 2 2.5 3.75 4.5 4.5l1.5-1.75l2.647 1.059M18 21.75c-1.5-1.75-3-3.25-3-5a3 3 0 0 1 6 0c0 1.75-1.5 3.25-3 5");
}
</style><path class="zshd-w74t"/>`,
		"fallback": "uix:call-local-presence",
	});
}

export default Component;
