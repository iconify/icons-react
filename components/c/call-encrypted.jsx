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
		"content": `<style>.tp3-q8g_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.225 16.876A13.97 13.97 0 0 1 2.5 4.5q0-.098.01-.196q.009-.098.028-.194q.02-.097.048-.191q.029-.094.066-.184q.038-.091.084-.178q.046-.086.101-.168t.117-.158t.132-.145t.145-.132t.158-.117t.168-.101q.087-.046.178-.084q.09-.037.184-.066q.094-.028.191-.048q.096-.019.194-.028T4.5 2.5H7l1.5 3.75l-1.75 1.5c1 2.25 3.25 4.5 5.5 5.5l1.5-1.75l1.728.691M15 17h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}
</style><path class="tp3-q8g_f"/>`,
		"fallback": "uix-sharp:call-encrypted",
	});
}

export default Component;
