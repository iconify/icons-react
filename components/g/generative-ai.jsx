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
		"content": `<style>.k4dyxfbtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.5q1 7 8 8q-7 1-8 8q-1-7-8-8q7-1 8-8Zm8-3q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Z");
}
</style><path class="k4dyxfbtx"/>`,
		"fallback": "uix-sharp:generative-ai",
	});
}

export default Component;
