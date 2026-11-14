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
		"content": `<style>.cg2v-dbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.941 16.601C6.601 15.187 2.5 10.2 2.5 4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2.5h2.75l1.25 4l-1.75 1.25c1 2.25 2.75 4 4.75 5L12.75 11L17 12.25v.83m-3 5.42q4-5.5 8 0q-4 5.5-8 0Zm4 0h.01");
}
</style><path class="cg2v-dbry"/>`,
		"fallback": "uix-sharp:call-monitor",
	});
}

export default Component;
