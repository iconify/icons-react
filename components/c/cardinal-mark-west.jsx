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
		"content": `<style>.j-emqe_de {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.5h8.5L12 5.75L16.25 9h-8.5L12 5.75ZM12 9v3m-4.75 4.75a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}
</style><path class="j-emqe_de"/>`,
		"fallback": "uix:cardinal-mark-west",
	});
}

export default Component;
