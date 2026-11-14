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
		"content": `<style>.q_4lklbts {
  d: path("M10 5.75L8.25 7.5L10 9.25Zm4 0l1.75 1.75L14 9.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqk735lfa {
  d: path("M5 2.5h14l1.5 19h-6L12 11L9.5 21.5h-6Zm3.25 5h7.5");
}
</style><g class="ulnmmdpxh"><path class="uqk735lfa"/><path class="q_4lklbts"/></g>`,
		"fallback": "uix-sharp:hip-measurement",
	});
}

export default Component;
