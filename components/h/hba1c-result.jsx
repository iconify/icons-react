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
		"content": `<style>.rperf0umc {
  d: path("M8.25 12.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2tekcbvl {
  d: path("M12 2.5c3.5 4.5 7 8 7 12c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-4 3.5-7.5 7-12ZM9.25 18.25l5.5-6.5");
}
</style><g class="ulnmmdpxh"><path class="y2tekcbvl"/><path class="rperf0umc"/></g>`,
		"fallback": "uix-sharp:hba1c-result",
	});
}

export default Component;
