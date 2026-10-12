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
		"content": `<style>.d6l0dqbla {
  cx: 10.25px;
  cy: 12px;
  r: 7.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_a5o-bwj {
  d: path("M6.75 8.75L8.5 10l-1.75 1.25m7-2.5L12 10l1.75 1.25m-1.5 2.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5M19.5 15h1.75m-2-2.75L21 11m-1.75 6.75L21 19");
}
</style><g class="hntgybcog"><circle class="d6l0dqbla"/><path class="i_a5o-bwj"/></g>`,
		"fallback": "iconoven:cough-face",
	});
}

export default Component;
