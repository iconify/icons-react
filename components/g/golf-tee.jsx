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
		"content": `<style>.g3bdg4buy {
  d: path("M7.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.t3w3ihbqn {
  d: path("M8 11.5h8l-3 3V19l-1 2l-1-2v-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g3bdg4buy"/><path class="t3w3ihbqn"/></g>`,
		"fallback": "uix-sharp:golf-tee",
	});
}

export default Component;
