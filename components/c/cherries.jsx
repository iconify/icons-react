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
		"content": `<style>.ph2ae_s9v {
  d: path("M7.5 12.75C7.5 9 10 5.5 15 4m1.5 7.75c0-3.25-1-6.25-1.5-7.75");
}

.rwu5rl0jf {
  d: path("M3.75 16.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm9-1a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rwu5rl0jf"/><path class="ph2ae_s9v"/></g>`,
		"fallback": "uix-sharp:cherries",
	});
}

export default Component;
