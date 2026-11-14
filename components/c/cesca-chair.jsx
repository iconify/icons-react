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
		"content": `<style>.q37iwnbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 21.5H6.5a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2H16m.25-8.5h1.5a1.75 1.75 0 0 1 1.75 1.75v5A1.75 1.75 0 0 1 17.75 12h-1.5a1.75 1.75 0 0 1-1.75-1.75v-5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="q37iwnbtp"/>`,
		"fallback": "uix:cesca-chair",
	});
}

export default Component;
