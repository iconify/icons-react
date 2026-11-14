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
		"content": `<style>.slt1oea3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.23 17.813C6.341 16.021 2.5 10.901 2.5 4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2.5H7L8.5 7l-2 1.5c1 2.5 4 5.5 6.5 6.5l1.5-2l1.165.388M18.5 15.5v6m2.598-4.5l-5.196 3m5.196 0l-5.196-3");
}
</style><path class="slt1oea3q"/>`,
		"fallback": "uix-sharp:cold-call",
	});
}

export default Component;
