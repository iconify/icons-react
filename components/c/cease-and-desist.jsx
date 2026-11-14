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
		"content": `<style>.hbcueobsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.486 2.5H17.5q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132t.132.145t.117.158t.101.168q.046.087.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194t.01.196v11.072m-1.943 5.927l-.057.001h-11q-.098 0-.196-.01q-.098-.009-.194-.028q-.097-.02-.191-.048q-.094-.029-.184-.066q-.091-.038-.178-.084q-.086-.046-.168-.101t-.158-.117t-.145-.132q-.07-.069-.132-.145t-.117-.158t-.101-.168t-.084-.178q-.037-.09-.066-.184q-.028-.094-.048-.191q-.019-.096-.028-.194T4.5 19.5V8.485M11 6.5h5m-8 11h5m-9.5-14l17 17");
}
</style><path class="hbcueobsh"/>`,
		"fallback": "uix-sharp:cease-and-desist",
	});
}

export default Component;
