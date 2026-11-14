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
		"content": `<style>.l7xo2bclh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.5Q6 15 9 17q2.5 1.5 3.5-1M7.75 4.335za1.5 1.5 0 0 1 .549 2.049l-1 1.732a1.5 1.5 0 0 1-2.049.549a1.5 1.5 0 0 1-.549-2.049l1-1.732a1.5 1.5 0 0 1 2.049-.549m8.21-.772l1.812-.845a1.5 1.5 0 0 1 1.994.725a1.5 1.5 0 0 1-.726 1.994l-1.812.845a1.5 1.5 0 0 1-1.994-.725a1.5 1.5 0 0 1 .726-1.994m2.395 9.588za1.5 1.5 0 0 1 .897 1.922l-.684 1.88a1.5 1.5 0 0 1-1.923.896a1.5 1.5 0 0 1-.897-1.922l.684-1.88a1.5 1.5 0 0 1 1.923-.896M11.5 9.5h.01m8.49 11h.01");
}
</style><path class="l7xo2bclh"/>`,
		"fallback": "uix:confetti",
	});
}

export default Component;
