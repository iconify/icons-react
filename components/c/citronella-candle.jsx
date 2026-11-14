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
		"content": `<style>.pq8rnecns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.228 21H4.5q-.098 0-.196-.01q-.098-.009-.194-.028q-.097-.02-.191-.048q-.094-.029-.184-.066q-.091-.038-.178-.084q-.086-.046-.168-.101t-.158-.117t-.145-.132t-.132-.145t-.117-.158t-.101-.168q-.046-.087-.084-.178q-.037-.09-.066-.184q-.028-.094-.048-.191q-.019-.096-.028-.194T2.5 19v-7h15v.8M10 3c1.75 1.75 2.5 2.75 2.5 3.75a2.5 2.5 0 0 1-5 0c0-1 .75-2 2.5-3.75Zm5.5 18.5c0-4.5 2-6.5 6-6.5c0 4.5-2 6.5-6 6.5Zm0 0l3-3.5");
}
</style><path class="pq8rnecns"/>`,
		"fallback": "uix-sharp:citronella-candle",
	});
}

export default Component;
