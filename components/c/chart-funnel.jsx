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
		"content": `<style>.tr7wv3izz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.788 4h10.424a2.625 2.625 0 0 1 2.458 3.547l-4.031 10.75A2.625 2.625 0 0 1 13.181 20h-2.362a2.625 2.625 0 0 1-2.458-1.703L4.33 7.547A2.625 2.625 0 0 1 6.788 4M5 9.5h14M7 14.75h10");
}
</style><path class="tr7wv3izz"/>`,
		"fallback": "uix:chart-funnel",
	});
}

export default Component;
