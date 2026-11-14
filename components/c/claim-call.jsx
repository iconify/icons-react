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
		"content": `<style>.m-l-j5bnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.727 16.958C7.07 15.404 3.423 10.848 3 4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T5 2.5h3l1.5 4l-2 1.5c1 2.25 2.75 4 5 5l.2-.267m.42-.56L14 11l3.309 1.241M15.5 15H19l2.5 2.5v4h-6Z");
}
</style><path class="m-l-j5bnl"/>`,
		"fallback": "uix-sharp:claim-call",
	});
}

export default Component;
