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
		"content": `<style>.liib3bcxe {
  d: path("M12.625 19.875L12 20.5L2.5 11V4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2.5H11l9.5 9.5l-3.915 3.915");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnkvzie7x {
  d: path("M5.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8 14l5.5-5.5m1.25 9.5l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="liib3bcxe"/><path class="xnkvzie7x"/></g>`,
		"fallback": "uix-sharp:discount-approval",
	});
}

export default Component;
