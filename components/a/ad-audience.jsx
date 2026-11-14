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
		"content": `<style>.m47iu0bte {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3 12c0-4 2.5-6 6-6c1.503 0 2.822.369 3.838 1.107M14 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m.5 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m3.5 0h.01");
}
</style><path class="m47iu0bte"/>`,
		"fallback": "uix:ad-audience",
	});
}

export default Component;
