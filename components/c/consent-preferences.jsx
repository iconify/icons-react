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
		"content": `<style>.hj0bgbc3r {
  d: path("M6.5 7.5h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h7M6.5 12h7a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1m-11 4.5h3a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="hj0bgbc3r"/></g>`,
		"fallback": "uix:consent-preferences",
	});
}

export default Component;
