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
		"content": `<style>.nqsu1obcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-1 10.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4m3.5-19h4.5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H17L14.5 13v-2.5h.5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2");
}
</style><path class="nqsu1obcg"/>`,
		"fallback": "uix:accountant-chat",
	});
}

export default Component;
