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
		"content": `<style>.luv4ozbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 18.25l.405-1.824a1.5 1.5 0 0 1 .404-.735l7.13-7.13a1.5 1.5 0 0 1 2.122 0l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-7.13 7.13a1.5 1.5 0 0 1-.735.404L5.75 20A1.467 1.467 0 0 1 4 18.25m7-8.75l3.5 3.5m3.625-8.375l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}
</style><path class="luv4ozbji"/>`,
		"fallback": "uix:ai-pen",
	});
}

export default Component;
