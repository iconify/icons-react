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
		"content": `<style>.cwt87ib2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 2.5h1a1.75 1.75 0 0 1 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 11.5 2.5m.5 12V19m-3.5-1.75h7M9.75 6.5H12m-2.25 4H12m0 11.25h.01");
}
</style><path class="cwt87ib2w"/>`,
		"fallback": "uix:burette",
	});
}

export default Component;
