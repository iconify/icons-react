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
		"content": `<style>.t8fzr9bhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 12l1.5 9.5h11L19 12M5 12l1-3.5L9.5 7l2-3.5L15 5l.5 3l3 1l.5 3Zm4.5-5L9 12m6.5-4l-1 4");
}
</style><path class="t8fzr9bhb"/>`,
		"fallback": "uix:crushed-ice",
	});
}

export default Component;
