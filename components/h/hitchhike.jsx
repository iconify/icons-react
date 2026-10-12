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
		"content": `<style>.c1c9ppbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.25H15a2 2 0 0 1 2 2V8.5h4.25v5H17v2a2 2 0 0 1-2 2h-4.25a2.25 2.25 0 0 1-2.25-2.25v-7H4.75a1.5 1.5 0 0 1 0-3m3.75 6H12m-3.5 3H12M2.75 21h3.5m4 0h3.5m4 0h3.5");
}
</style><path class="c1c9ppbyz"/>`,
		"fallback": "iconoven:hitchhike",
	});
}

export default Component;
