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
		"content": `<style>.il81t5t6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4v16m19-16v16M8 6za2 2 0 0 1 2 2v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m8 2.5za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2");
}
</style><path class="il81t5t6j"/>`,
		"fallback": "uix:distribute-horizontal",
	});
}

export default Component;
