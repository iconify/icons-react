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
		"content": `<style>.m95femb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.547 17.194C6.983 15.247 2.908 10.124 2.5 4q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2H7l1.75 4.5l-2 1.5c1 2.5 3.25 4.75 5.75 5.75l1.5-2l.24.093m4.01 9.657c-2-2-3-3.5-3-5.5a3 3 0 0 1 6 0c0 2-1 3.5-3 5.5Z");
}
</style><path class="m95femb_j"/>`,
		"fallback": "uix-sharp:caller-location",
	});
}

export default Component;
