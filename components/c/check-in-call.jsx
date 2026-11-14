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
		"content": `<style>.vpan_5b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.6 15.888C19.148 13.175 20.761 9.567 21 5.5q0-.098-.01-.196q-.009-.098-.028-.194q-.02-.097-.048-.191q-.029-.094-.066-.184q-.038-.091-.084-.178q-.046-.086-.101-.168t-.117-.158t-.132-.145q-.069-.07-.145-.132t-.158-.117t-.168-.101t-.178-.084q-.09-.037-.184-.066q-.094-.028-.191-.048q-.096-.019-.194-.028T19 3.5h-3.5L14 8l2 1.5C15 12 12 15 9.5 16L8 14l-4.5 1.5V19q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T5.5 21c2.36-.139 4.566-.74 6.532-1.719M14.75 18l2 2L21 15.75");
}
</style><path class="vpan_5b4t"/>`,
		"fallback": "uix-sharp:check-in-call",
	});
}

export default Component;
