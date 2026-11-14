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
		"content": `<style>.yyezy6g4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9a6 4.5 0 1 0 12 0A6 4.5 0 1 0 9 9Zm1.75 4.25l-2.5 2.5m-1.189-.932l2.121 2.121l-4.243 4.243l-2.121-2.121Zm3.696-1.575l8.486-8.486m-7.425 1.061l6.364 6.364");
}
</style><path class="yyezy6g4w"/>`,
		"fallback": "uix-sharp:badminton-racket",
	});
}

export default Component;
